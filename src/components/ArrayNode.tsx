import { FC, MouseEvent, useState } from "react"
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
        <li className={`array node ${collapsed ? 'collapsed' : ''}`}>
            <div className="toggle-handler" onClick={ toggleCollapsedState } />
            <Property name={ property } />
            <ul>{ children }</ul>
        </li>
    );
}
