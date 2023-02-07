import { FC } from "react"
import { Property } from "./Property";
import { Value } from "./Value";

type RemovedNodeProps = {
    property: string,
    value: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const RemovedNode: FC<RemovedNodeProps> = ({ property, value, propertyStyle = 'default' }) => {
    
    const propertySpan = <Property name={property} />;

    return (
        <li className="removed leaf node">
            { propertyStyle === 'prefix' && propertySpan }
            <span className="type" style={{ backgroundColor: 'red' }}>removed</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={value} />
        </li>
    );
}
