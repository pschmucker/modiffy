import { FC } from "react";
import { useTranslation } from "react-i18next";
import * as styles from "./Diff.module.scss";
import { Value } from "./Value";

type NewNodeProps = {
    value: any
}

export const NewNode: FC<NewNodeProps> = ({ value }) => {
    const { t } = useTranslation();

    return (
        <li className={`${styles.new} ${styles.leaf} ${styles.node}`}>
            <span className={styles.type}>{ t('type.new') }</span>
            <Value value={value} />
        </li>
    );
}
