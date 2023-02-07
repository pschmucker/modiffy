import { FC } from "react"
import { Property } from "./Property";
import { Value } from "./Value";

type UpdatedNodeProps = {
    property: string,
    oldValue: any,
    newValue: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const UpdatedNode: FC<UpdatedNodeProps> = ({ property, oldValue, newValue, propertyStyle = 'default' }) => {
    
    const propertySpan = <Property name={property} />;

    return (
        <li className="updated leaf node">
            { propertyStyle === 'prefix' && propertySpan }
            <span className="type" style={{ backgroundColor: 'darkorange' }}>updated</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={oldValue} className="old" />
            <span style={{ fontSize: '1.1em' }}>&rarr;</span>
            <Value value={newValue} className="new" />
        </li>
    );
}
