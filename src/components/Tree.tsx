import { FC, useState } from "react";


type TreeProps = {
    object: any,
    expanded?: boolean,
    children: (
        isCollapsed: (path: string[]) => boolean,
        toggle: (path: string, collapsed: boolean, deep: boolean) => void
    ) => JSX.Element
}

export const Tree: FC<TreeProps> = ({ object, expanded = true, children }) => {

    const [ collapsedNodes, setCollapsedNodes ] = useState<{[key: string]: boolean}>(() => {
        const flatten = (object: any, path = ''): any => {
            if (!(object instanceof Object)) {
                return { [path.replace(/\.$/, '')]: !expanded };
            }
        
            return Object.keys(object).reduce((target: any, key: string) => ({
                ...target,
                ...flatten(null, path + key + '.'),
                ...flatten(object[key], path + key + '.')
            }), { '': !expanded });
        }

        return flatten(object);
    });

    const isCollapsed = (path: string[]) => collapsedNodes[path.join('.')];

    const toggle = (path: string, collapsed: boolean, deep: boolean) => {
        const changedCollapsedNodes = deep
            ? Object.fromEntries(Object.keys(collapsedNodes).filter(key => key.startsWith(path)).map(key => [key, collapsed ]))
            : { [path]: collapsed };

        setCollapsedNodes({ ...collapsedNodes, ...changedCollapsedNodes });
    }

    return children(isCollapsed, toggle);
}
