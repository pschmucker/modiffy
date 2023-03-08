import { FC } from "react";
import * as styles from "./Diff.module.scss";
import { Leaf } from "./Leaf";
import { Value } from "./Value";


type UpdatedNodeProps = {
    property: string,
    oldValue: any,
    newValue: any
}

export const UpdatedNode: FC<UpdatedNodeProps> = ({ property, oldValue, newValue }) => {

    return (
        <Leaf property={property} type="updated" className={styles.updated}>
            <Value value={oldValue} className={styles.old} />
            <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
            <Value value={newValue} className={styles.new} />
        </Leaf>
    );
}
