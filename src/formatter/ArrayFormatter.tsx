import { Value } from "../components/Value";
import * as styles from "../components/Diff.module.scss";
import { Formatter } from "./Formatter";

export class ArrayFormatter implements Formatter {

    matches(value: any): boolean {
        return Array.isArray(value);
    }
    
    format(value: any): JSX.Element {
        return <span className={`${styles.list} ${styles.value}`}>{
            (value as any[]).map((item, index) => <Value key={index} value={item} />)
        }</span>;
    }
}
