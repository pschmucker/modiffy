import { FC } from "react"
import { Property } from "./Property";
import { Value } from "./Value";
import * as styles from "./Diff.module.scss";

type RemovedNodeProps = {
    property: string,
    value: any,
    propertyStyle?: 'default' | 'hidden' | 'prefix'
}

export const RemovedNode: FC<RemovedNodeProps> = ({ property, value, propertyStyle = 'default' }) => {
    
    const propertySpan = <Property name={property} />;

    return (
        <li className={`${styles.removed} ${styles.leaf} ${styles.node}`}>
            { propertyStyle === 'prefix' && propertySpan }
            <span className={styles.type}>removed</span>
            { propertyStyle === 'default' && propertySpan }
            <Value value={value} />
        </li>
    );
}
