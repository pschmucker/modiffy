import { Trans } from "react-i18next";
import * as styles from "../components/Diff.module.scss";
import { Leaf } from "../components/Leaf";
import { Node } from "../components/Node";
import { Tree } from "../components/Tree";
import { Value } from "../components/Value";
import { Formatter } from "./Formatter";


export class ObjectFormatter implements Formatter {

    matches(value: any): boolean {
        return typeof value === 'object';
    }

    format(value: any): JSX.Element {
        const displayableProperty = value.name || value.label || value.code || value.description || value.value || value.content;
        const preview = displayableProperty ? `${displayableProperty}`.substring(0, 80) : `${displayableProperty}`;
    
        if (!displayableProperty) {
            return <>
                <span className={`${styles.object} ${styles.placeholder}`}>
                    <Trans>placeholder.object</Trans>
                </span>
                <div className={styles.preview}>
                    <Tree object={value}>
                        {(isCollapsed, toggle) => {
                            const buildTreeNode = (property: string, value: any, index: number, nodePath: string[] = []): JSX.Element => {

                                if (value === null || typeof value !== 'object') {
                                    return (
                                        <Leaf key={index} property={property}>
                                            <Value value={value} />
                                        </Leaf>
                                    );
                                }
                            
                                return (
                                    <Node key={index} property={property} path={nodePath} className={Array.isArray(value) ? styles.array : styles.object} expanded={!isCollapsed(nodePath)} onToggle={toggle}>
                                        { Object.entries(value).map(([p, v], i) => buildTreeNode(Array.isArray(value) ? `${+p + 1}` : p, v, i, [...nodePath, p])) }
                                    </Node>
                                );
                            }

                            return <ul>{ Object.entries(value).map(([p, v], i) => buildTreeNode(Array.isArray(value) ? `${+p + 1}` : p, v, i, [p])) }</ul>;
                        }}
                    </Tree>
                </div>
            </>;
        }

        return <span className={styles.content}>
            &quot;{ preview }

            { displayableProperty.length > 80 && <>
                <span>...&nbsp;</span>
                <span className={`${styles.truncated} ${styles.placeholder}`} title={displayableProperty}>
                    <Trans>placeholder.truncated</Trans>
                </span>
            </>}&quot;
        </span>;
    }
}
