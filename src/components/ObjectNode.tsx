import { FC, MouseEvent, useState } from "react";
import { Property } from "./Property";
import { UnchangedNode } from "./UnchangedNode";

type ObjectNodeProps = {
    property: string,
    children: JSX.Element[],
    expanded?: boolean
}

export const ObjectNode: FC<ObjectNodeProps> = ({ property, children, expanded = false }) => {
    const [ collapsed, setCollapsed ] = useState(!expanded);

    const toggleCollapsedState = (event: MouseEvent): void => {
        event.stopPropagation();
        setCollapsed(!collapsed);
    }

    if (!children.length) {
        return <UnchangedNode property={property} propertyStyle="prefix" />
    }

    return (
        <li className={`object node ${collapsed ? 'collapsed' : ''}`}>
            <div className="toggle-handler" onClick={ toggleCollapsedState } />
            <Property name={ property } />
            <ul>{ children }</ul>
        </li>
    );
}