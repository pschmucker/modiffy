import { FC } from "react";
import * as styles from "./Diff.module.scss";
import { Value } from "./Value";

type NewNodeProps = {
    value: any
}

export const NewNode: FC<NewNodeProps> = ({ value }) => {
    return (
        <li className={`${styles.new} ${styles.leaf} ${styles.node}`}>
            <span className={styles.type}>new</span>
            <Value value={value} />
        </li>
    );
}
