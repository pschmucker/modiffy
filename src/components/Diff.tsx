import { diff } from "json-diff"
import { FC } from "react"
import { I18nextProvider } from "react-i18next"
import { configOptions } from "../config/Options"
import i18n from "../i18n"
import { AddedNode } from "./AddedNode"
import { ArrayNode } from "./ArrayNode"
import * as styles from "./Diff.module.scss"
import { NewNode } from "./NewNode"
import { ObjectNode } from "./ObjectNode"
import { RemovedNode } from "./RemovedNode"
import { UnchangedNode } from "./UnchangedNode"
import { UpdatedNode } from "./UpdatedNode"

type DiffProps = {
    oldValue: any,
    newValue: any,
    expanded?: boolean,
    debug?: 'disabled' | 'diff' | 'full'
}

export const Diff: FC<DiffProps> = ({ oldValue, newValue, expanded = true, debug = 'disabled' }) => {

    const displayDiffNode = (propertyName: string, diffNode: any, index: number): JSX.Element => {

        if (diffNode === undefined) {
            return <UnchangedNode key={index} property={propertyName} propertyStyle="hidden" />;
        }

        if (propertyName.endsWith('__added')) {
            return <AddedNode key={index} property={propertyName.replace(/__added$/, '')} value={diffNode} />;
        }

        if (propertyName.endsWith('__deleted')) {
            return <RemovedNode key={index} property={propertyName.replace(/__deleted$/, '')} value={diffNode} />;
        }

        const properties = Object.entries(diffNode).filter(([key]) => !configOptions.ignoredProperties.includes(key.replace(/__(?:added|deleted)$/, '')));

        if (properties.length === 2 && properties.some(([key]) => key === '__old') && properties.some(([key]) => key === '__new')) {
            return (propertyName === 'root' && diffNode.__old === null)
                ? <NewNode key={index} value={diffNode.__new} />
                : <UpdatedNode key={index} property={propertyName} oldValue={diffNode.__old} newValue={diffNode.__new} />
            ;
        }

        if (Array.isArray(diffNode)) {
            return (
                <ArrayNode key={index} property={propertyName} expanded={expanded}>
                    { properties.map(([key, value]: [string, any], arrayIndex) => {
                        if (value.length === 1 && value[0] === ' ') {
                            return <UnchangedNode key={arrayIndex} property={`${+key + 1}`} propertyStyle="prefix" />;
                        }
                        
                        if (value[0] === '-') {
                            return <RemovedNode key={arrayIndex} property={`${+key + 1}`} value={value[1]} propertyStyle="prefix" />;
                        }
                        
                        if (value[0] === '+') {
                            return <AddedNode key={arrayIndex} property={`${+key + 1}`} value={value[1]} propertyStyle="prefix" />;
                        }
                        
                        if (value[0] === '~') {
                            return displayDiffNode(`${+key + 1}`, value[1], arrayIndex);
                        }

                        return <span key={arrayIndex}></span>;
                    })}
                </ArrayNode>
            );
        }

        return (
            <ObjectNode key={index} property={propertyName} expanded={expanded}>
                { properties.map(([key, value], propertyIndex) => displayDiffNode(key, value, propertyIndex)) }
            </ObjectNode>
        );
    }

    const jsonDiff = diff(oldValue, newValue);

    return <I18nextProvider i18n={i18n}>
        <div className={`modiffy ${styles.diff}`}>
            <ul>{ displayDiffNode('root', jsonDiff, 0) }</ul>
        </div>

        { debug === 'full' && <pre className="old">{ JSON.stringify(oldValue, undefined, 2) }</pre> }
        { debug === 'full' && <pre className="new">{ JSON.stringify(newValue, undefined, 2) }</pre> }
        { debug !== 'disabled' && <pre className="diff">{ JSON.stringify(jsonDiff, undefined, 2) }</pre> }
    </I18nextProvider>;
}
