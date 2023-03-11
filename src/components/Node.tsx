import { FC, MouseEvent, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
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

    const { t } = useTranslation();

    const [ collapsed, setCollapsed ] = useState(!expanded);
    const [ hover, setHover ] = useState(false);

    useEffect(() => {
        setCollapsed(!expanded);
    }, [expanded]);

    const toggleCollapsedState = (event: MouseEvent): void => {
        event.stopPropagation();
        onToggle(path.join('.'), !collapsed, event.altKey);
    }

    const handleHover = (hover: boolean) => (event: MouseEvent) => {
        event.stopPropagation();
        setHover(hover);
    }

    return (
        <li className={`${styles.node} ${collapsed ? styles.collapsed : ''} ${hover ? styles.hover : ''} ${className}`} onMouseOver={handleHover(true)} onMouseOut={handleHover(false)}>
            <div className={`${styles['toggle-handler']}`} onClick={toggleCollapsedState} data-hint={ t(`label.${collapsed ? 'expand' : 'collapse'}All`) } />
            <Property name={property} />
            <ul>{ children }</ul>
        </li>
    );
}
