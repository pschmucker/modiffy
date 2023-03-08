import { FC, MouseEvent, useEffect, useState } from "react"
import * as styles from "./Diff.module.scss"
import { Property } from "./Property"


type NodeProps = {
    property: string,
    path: string[],
    className?: string,
    expanded?: boolean,
    onToggle?: (path: string, collapsed: boolean, deep: boolean) => void,
    children?: JSX.Element | JSX.Element[]
}

export const Node: FC<NodeProps> = ({ property, path, className = '', expanded = true, onToggle = () => {}, children }) => {

    const [ collapsed, setCollapsed ] = useState(!expanded);

    useEffect(() => {
        setCollapsed(!expanded);
    }, [expanded]);

    const toggleCollapsedState = (event: MouseEvent): void => {
        event.stopPropagation();
        onToggle(path.join('.'), !collapsed, event.altKey);
    }

    return (
        <li className={`${styles.node} ${collapsed ? styles.collapsed : ''} ${className}`}>
            <div className={`${styles['toggle-handler']}`} onClick={toggleCollapsedState} />
            <Property name={property} />
            <ul>{ children }</ul>
        </li>
    );
}
