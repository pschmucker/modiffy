import { FC } from "react"
import { useTranslation } from "react-i18next"
import * as styles from "./Diff.module.scss"
import { Property } from "./Property"

type UnchangedNodeProps = {
    property: string,
    propertyStyle: 'default' | 'hidden' | 'prefix'
}

export const UnchangedNode: FC<UnchangedNodeProps> = ({ property, propertyStyle = 'default' }) => {
    const { t } = useTranslation();

    const propertySpan = <Property name={property} />;

    return (
        <li className={`${styles.unchanged} ${styles.leaf} ${styles.node}`}>
            { propertyStyle === 'prefix' && propertySpan }
            <span className={styles.type}>{ t('type.unchanged') }</span>
            { propertyStyle === 'default' && propertySpan }
        </li>
    );
}
