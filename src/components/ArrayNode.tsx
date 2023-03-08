import { FC } from "react";
import * as styles from "./Diff.module.scss";
import { Node } from "./Node";


type ArrayNodeProps = {
    property: string,
    children: JSX.Element[],
    expanded?: boolean
}

export const ArrayNode: FC<ArrayNodeProps> = ({ property, children, expanded = false }) => {

    return (
        <Node property={property} className={styles.array} expanded={expanded}>
            <ul>{ children }</ul>
        </Node>
    );
}
