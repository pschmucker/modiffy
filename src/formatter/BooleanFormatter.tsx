import { Trans } from "react-i18next";
import styles from "../components/Diff.module.scss";
import { Formatter } from "./Formatter";
import { JSX } from 'react';

export class BooleanFormatter implements Formatter {

    matches(value: any): boolean {
        return typeof value === 'boolean';
    }
    
    format(value: any): JSX.Element {
        return <span className={styles.content}>
            <Trans>{ value ? 'value.true' : 'value.false' }</Trans>
        </span>;
    }
}
