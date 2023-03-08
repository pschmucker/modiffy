import { FC, MouseEvent, useState } from "react"
import * as styles from "./Diff.module.scss"
import { Property } from "./Property"


type NodeProps = {
    property: string,
    className?: string,
    expanded?: boolean,
    children?: JSX.Element | JSX.Element[]
}

export const Node: FC<NodeProps> = ({ property, className = '', expanded = true, children }) => {

    const [ collapsed, setCollapsed ] = useState(!expanded);

    const toggleCollapsedState = (event: MouseEvent): void => {
        event.stopPropagation();
        setCollapsed(!collapsed);
    }

    return (
        <li className={`${styles.node} ${collapsed ? styles.collapsed : ''} ${className}`}>
            <div className={`${styles['toggle-handler']}`} onClick={ toggleCollapsedState } />
            <Property name={property} />
            <ul>{ children }</ul>
        </li>
    );
}
