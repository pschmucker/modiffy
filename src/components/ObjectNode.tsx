import { FC } from "react";
import * as styles from "./Diff.module.scss";
import { Node } from "./Node";


type ObjectNodeProps = {
    property: string,
    children: JSX.Element[],
    expanded?: boolean
}

export const ObjectNode: FC<ObjectNodeProps> = ({ property, children, expanded = false }) => {

    return (
        <Node property={property} className={styles.object} expanded={expanded}>
            <ul>{ children }</ul>
        </Node>
    );
}
