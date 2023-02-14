import { FC } from "react";
import * as styles from "./Diff.module.scss";

type PropertyProps = {
    name: string;
}

export const Property: FC<PropertyProps> = ({ name }) => {
    return <span className={styles.property}>{ name }</span>;
}
