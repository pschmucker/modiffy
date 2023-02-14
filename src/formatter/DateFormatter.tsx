import * as styles from "../components/Diff.module.scss";
import { Formatter } from "./Formatter";

export class DateFormatter implements Formatter {

    matches(value: any): boolean {
        return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|\+\d{2}:\d{2})?$/.test(value);
    }
    
    format(value: any): JSX.Element {
        return <span className={styles.content}>{ new Date(value).toLocaleString() }</span>;
    }
}
