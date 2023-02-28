import { FC } from "react"
import { useTranslation } from "react-i18next"
import * as styles from "./Diff.module.scss"
import { Property } from "./Property"
import { Value } from "./Value"

type AddedNodeProps = {
    property: string,
    value: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const AddedNode: FC<AddedNodeProps> = ({ property, value, propertyStyle = 'default' }) => {
    const { t } = useTranslation();

    const propertySpan = <Property name={property} />;

    return (
        <li className={`${styles.added} ${styles.leaf} ${styles.node}`}>
            { propertyStyle === 'prefix' && propertySpan }
            <span className={styles.type}>{ t('type.added') }</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={value} className={`${styles.new}`} />
        </li>
    );
}
