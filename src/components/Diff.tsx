import { diff } from "json-diff"
import { FC } from "react"
import { AddedNode } from "./AddedNode"
import { ArrayNode } from "./ArrayNode"
import { NewNode } from "./NewNode"
import { ObjectNode } from "./ObjectNode"
import { RemovedNode } from "./RemovedNode"
import { UnchangedNode } from "./UnchangedNode"
import { UpdatedNode } from "./UpdatedNode"
import './Diff.scss'

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

        const properties = Object.entries(diffNode).filter(([key]) => key !== 'id');

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

    return (
        <div className="diff">
            <ul>{ displayDiffNode('root', jsonDiff, 0) }</ul>

            { debug === 'full' && <pre>{ JSON.stringify(oldValue, undefined, 2) }</pre> }
            { debug === 'full' && <pre>{ JSON.stringify(newValue, undefined, 2) }</pre> }
            { debug !== 'disabled' && <pre>{ JSON.stringify(jsonDiff, undefined, 2) }</pre> }
        </div>
    );
}
