import { FC } from "react";
import { useTranslation } from "react-i18next";

type PropertyProps = {
    name: string;
}

export const Property: FC<PropertyProps> = ({ name }) => {
    const { t } = useTranslation();

    return <span className="property">{ t(`property.${name}`, name) }</span>;
}
