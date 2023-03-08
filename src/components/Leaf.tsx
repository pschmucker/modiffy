import { FC } from "react";
import { Property } from "./Property";
import * as styles from "./Diff.module.scss"
import { useTranslation } from "react-i18next";


type LeafProps = {
    property: string,
    propertyStyle?: 'default' | 'hidden' | 'prefix',
    type?: string,
    className?: string,
    children?: JSX.Element | JSX.Element[]
}

export const Leaf: FC<LeafProps> = ({ property, propertyStyle = 'default', type, className = '', children = <></> }) => {

    const { t } = useTranslation();

    const propertySpan = <Property name={property} />;

    return (
        <li className={`${styles.leaf} ${styles.node} ${className}`}>
            { propertyStyle === 'prefix' && propertySpan }
            { type && <span className={styles.type}>{ t(`type.${type}`) }</span>}
            { propertyStyle === 'default' && propertySpan }
            { children }
        </li>
    );
}
