import { FC } from "react";
import { useTranslation } from "react-i18next";
import * as styles from "./Diff.module.scss";

type PropertyProps = {
    name: string;
}

export const Property: FC<PropertyProps> = ({ name }) => {
    const { t } = useTranslation();

    return <span className={styles.property}>{ t(`property.${name}`, name) }</span>;
}
