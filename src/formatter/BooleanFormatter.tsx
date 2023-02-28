import { Trans } from "react-i18next";
import * as styles from "../components/Diff.module.scss";
import { Formatter } from "./Formatter";

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
