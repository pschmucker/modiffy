import { FC, MouseEvent, useState } from "react";
import * as styles from "./Diff.module.scss";
import { Property } from "./Property";

type ArrayNodeProps = {
    property: string,
    children: JSX.Element[],
    expanded?: boolean
}

export const ArrayNode: FC<ArrayNodeProps> = ({ property, children, expanded = false }) => {
    const [ collapsed, setCollapsed ] = useState(!expanded);

    const toggleCollapsedState = (event: MouseEvent): void => {
        event.stopPropagation();
        setCollapsed(!collapsed);
    }

    return (
        <li className={`${styles.array} ${styles.node} ${collapsed ? styles.collapsed : ''}`}>
            <div className={`${styles['toggle-handler']}`} onClick={ toggleCollapsedState } />
            <Property name={ property } />
            <ul>{ children }</ul>
        </li>
    );
}
