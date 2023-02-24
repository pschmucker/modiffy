import * as styles from "../components/Diff.module.scss";
import { Formatter } from "./Formatter";

export class DefaultFormatter implements Formatter {

    matches(): boolean {
        return true;
    }
    
    format(value: any): JSX.Element {
        return <span className={styles.content}>{ JSON.stringify(value) }</span>;
    }
}
