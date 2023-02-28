import { FC } from "react"
import { Property } from "./Property";
import { Value } from "./Value";
import * as styles from "./Diff.module.scss";
import { useTranslation } from "react-i18next";

type RemovedNodeProps = {
    property: string,
    value: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const RemovedNode: FC<RemovedNodeProps> = ({ property, value, propertyStyle = 'default' }) => {
    const { t } = useTranslation();
    
    const propertySpan = <Property name={property} />;

    return (
        <li className={`${styles.removed} ${styles.leaf} ${styles.node}`}>
            { propertyStyle === 'prefix' && propertySpan }
            <span className={styles.type}>{ t('type.removed') }</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={value} />
        </li>
    );
}
