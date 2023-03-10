import { diff } from "json-diff"
import { FC } from "react"
import { I18nextProvider } from "react-i18next"
import { configOptions } from "../config/Options"
import i18n from "../i18n"
import * as styles from "./Diff.module.scss"
import { Leaf } from "./Leaf"
import { Node } from "./Node"
import { Tree } from "./Tree"
import { Value } from "./Value"


type DiffProps = {
    oldValue: any,
    newValue: any,
    expanded?: boolean,
    debug?: 'disabled' | 'diff' | 'full'
}

export const Diff: FC<DiffProps> = ({ oldValue, newValue, expanded = true, debug = 'disabled' }) => {

    const jsonDiff = diff(oldValue, newValue);

    return <I18nextProvider i18n={i18n}>
        <div className={`modiffy ${styles.diff}`}>
            <Tree object={jsonDiff} expanded={expanded}>
                {(isCollapsed, toggle) => {
                    const displayDiffNode = (propertyName: string, diffNode: any, index: number, nodePath: string[] = []): JSX.Element => {
                
                        if (diffNode === undefined) {
                            return <Leaf key={index} property={propertyName} propertyStyle="hidden" type="unchanged" className={styles.unchanged} />;
                        }
                
                        if (propertyName.endsWith('__added')) {
                            return (
                                <Leaf key={index} property={propertyName.replace(/__added$/, '')} type="added" className={styles.added}>
                                    <Value value={diffNode} className={`${styles.added}`} />
                                </Leaf>
                            );
                        }
                
                        if (propertyName.endsWith('__deleted')) {
                            return (
                                <Leaf key={index} property={propertyName.replace(/__deleted$/, '')} type="removed" className={styles.removed}>
                                    <Value value={diffNode} className={`${styles.removed}`} />
                                </Leaf>
                            );
                        }
                
                        const properties = Object.entries(diffNode).filter(([key]) => !configOptions.ignoredProperties.includes(key.replace(/__(?:added|deleted)$/, '')));
                
                        if (properties.length === 2 && properties.some(([key]) => key === '__old') && properties.some(([key]) => key === '__new')) {
                            if (propertyName === 'root' && diffNode.__old === null) {
                                return (
                                    <Leaf key={index} property={'root'} propertyStyle="hidden" type="new" className={styles.new}>
                                        <Value value={diffNode.__new} />
                                    </Leaf>
                                );
                            }
                            else {
                                return (
                                    <Leaf key={index} property={propertyName} type="updated" className={styles.updated}>
                                        <Value value={diffNode.__old} className={styles.old} />
                                        <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
                                        <Value value={diffNode.__new} className={styles.new} />
                                    </Leaf>
                                );
                            }
                        }
                
                        if (Array.isArray(diffNode)) {
                            return (
                                <Node key={index} property={propertyName} path={nodePath} className={styles.array} expanded={!isCollapsed(nodePath)} onToggle={toggle}>
                                    { properties.map(([key, value]: [string, any], arrayIndex) => {
                                        if (value.length === 1 && value[0] === ' ') {
                                            return <Leaf key={arrayIndex} property={`${+key + 1}`} propertyStyle="prefix" type="unchanged" className={styles.unchanged} />;
                                        }
                                        
                                        if (value[0] === '-') {
                                            return (
                                                <Leaf key={arrayIndex} property={`${+key + 1}`} propertyStyle="prefix" type="removed" className={styles.removed}>
                                                    <Value value={value[1]} className={`${styles.removed}`} />
                                                </Leaf>
                                            );
                                        }
                                        
                                        if (value[0] === '+') {
                                            return (
                                                <Leaf key={arrayIndex} property={`${+key + 1}`} propertyStyle="prefix" type="added" className={styles.added}>
                                                    <Value value={value[1]} className={`${styles.added}`} />
                                                </Leaf>
                                            );
                                        }
                                        
                                        if (value[0] === '~') {
                                            return displayDiffNode(`${+key + 1}`, value[1], arrayIndex, [...nodePath, key]);
                                        }
                
                                        return <></>;
                                    })}
                                </Node>
                            );
                        }
                
                        return (
                            <Node key={index} property={propertyName} path={nodePath} className={styles.object} expanded={!isCollapsed(nodePath)} onToggle={toggle}>
                                { properties.map(([key, value], propertyIndex) => displayDiffNode(key, value, propertyIndex, [...nodePath, key])) }
                            </Node>
                        );
                    }

                    return <ul>{ displayDiffNode('root', jsonDiff, 0) }</ul>;
                }}
            </Tree>
        </div>

        { debug === 'full' && <pre className="old">{ JSON.stringify(oldValue, undefined, 2) }</pre> }
        { debug === 'full' && <pre className="new">{ JSON.stringify(newValue, undefined, 2) }</pre> }
        { debug !== 'disabled' && <pre className="diff">{ JSON.stringify(jsonDiff, undefined, 2) }</pre> }
    </I18nextProvider>;
}
