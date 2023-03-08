import { FC } from "react"
import * as styles from "./Diff.module.scss"
import { Leaf } from "./Leaf"


type UnchangedNodeProps = {
    property: string
}

export const UnchangedNode: FC<UnchangedNodeProps> = ({ property }) => {

    return (
        <Leaf property={property} propertyStyle="hidden" type="unchanged" className={styles.unchanged} />
    );
}
