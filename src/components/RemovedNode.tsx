import { FC } from "react";
import * as styles from "./Diff.module.scss";
import { Leaf } from "./Leaf";
import { Value } from "./Value";


type RemovedNodeProps = {
    property: string,
    value: any
}

export const RemovedNode: FC<RemovedNodeProps> = ({ property, value }) => {

    return (
        <Leaf property={property} type="removed" className={styles.removed}>
            <Value value={value} className={styles.removed} />
        </Leaf>
    );
}
