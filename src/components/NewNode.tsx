import { FC } from "react";
import * as styles from "./Diff.module.scss";
import { Leaf } from "./Leaf";
import { Value } from "./Value";


type NewNodeProps = {
    value: any
}

export const NewNode: FC<NewNodeProps> = ({ value }) => {

    return (
        <Leaf property={'root'} propertyStyle="hidden" type="new" className={styles.new}>
            <Value value={value} />
        </Leaf>
    );
}
