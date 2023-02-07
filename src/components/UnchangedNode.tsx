import { FC } from "react"
import { Property } from "./Property"

type UnchangedNodeProps = {
    property: string,
    propertyStyle: 'default' | 'hidden' | 'prefix'
}

export const UnchangedNode: FC<UnchangedNodeProps> = ({ property, propertyStyle = 'default' }) => {

    const propertySpan = <Property name={property} />;

    return (
        <li className="leaf node">
            { propertyStyle === 'prefix' && propertySpan }
            <span className="type" style={{ backgroundColor: 'grey' }}>unchanged</span>
            { propertyStyle === 'default' && propertySpan }
        </li>
    );
}
