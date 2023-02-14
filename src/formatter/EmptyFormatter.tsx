import * as styles from "../components/Diff.module.scss";
import { Formatter } from "./Formatter";

export class EmptyFormatter implements Formatter {

    matches(value: any): boolean {
        return value === undefined || value === null;
    }
    
    format(): JSX.Element {
        return <span className={`${styles.empty} ${styles.placeholder}`} />;
    }
}
