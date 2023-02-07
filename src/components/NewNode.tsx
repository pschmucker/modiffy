import { FC } from "react"
import { Value } from "./Value";

type NewNodeProps = {
    value: any
}

export const NewNode: FC<NewNodeProps> = ({ value }) => {
    return (
        <li className="leaf node">
            <span className="type" style={{ backgroundColor: 'blue' }}>new</span>
            <Value value={value} />
        </li>
    );
}
