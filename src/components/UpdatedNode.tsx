import { FC } from "react";
import { useTranslation } from "react-i18next";
import * as styles from "./Diff.module.scss";
import { Property } from "./Property";
import { Value } from "./Value";

type UpdatedNodeProps = {
    property: string,
    oldValue: any,
    newValue: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const UpdatedNode: FC<UpdatedNodeProps> = ({ property, oldValue, newValue, propertyStyle = 'default' }) => {
    const { t } = useTranslation();
    
    const propertySpan = <Property name={property} />;

    return (
        <li className={`${styles.updated} ${styles.leaf} ${styles.node}`}>
            { propertyStyle === 'prefix' && propertySpan }
            <span className={styles.type}>{ t('type.updated') }</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={oldValue} className={styles.old} />
            <span style={{ fontSize: '1.1em' }}>&rarr;</span>
            <Value value={newValue} className={styles.new} />
        </li>
    );
}
