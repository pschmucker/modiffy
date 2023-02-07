import { FC } from "react";

type PropertyProps = {
    name: string;
}

export const Property: FC<PropertyProps> = ({ name }) => {
    return <span className="property">{ name }</span>;
}
