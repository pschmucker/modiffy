import { FC } from "react"
import * as styles from "./Diff.module.scss"
import { Leaf } from "./Leaf"
import { Value } from "./Value"


type AddedNodeProps = {
    property: string,
    value: any
}

export const AddedNode: FC<AddedNodeProps> = ({ property, value }) => {

    return (
        <Leaf property={property} type="added" className={styles.added}>
            <Value value={value} className={styles.added} />
        </Leaf>
    );
}
