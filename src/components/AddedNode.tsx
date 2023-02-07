import { FC } from "react"
import { Property } from "./Property"
import { Value } from "./Value"

type AddedNodeProps = {
    property: string,
    value: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const AddedNode: FC<AddedNodeProps> = ({ property, value, propertyStyle = 'default' }) => {

    const propertySpan = <Property name={property} />;

    return (
        <li className="added leaf node">
            { propertyStyle === 'prefix' && propertySpan }
            <span className="type" style={{ backgroundColor: 'green' }}>added</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={value} className="new" />
        </li>
    );
}