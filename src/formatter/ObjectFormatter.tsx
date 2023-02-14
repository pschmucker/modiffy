import { Formatter } from "./Formatter";
import * as styles from "../components/Diff.module.scss";

export class ObjectFormatter implements Formatter {

    matches(value: any): boolean {
        return typeof value === 'object';
    }
    
    format(value: any): JSX.Element {
        const displayableProperty = value.name || value.label || value.code || value.description || value.value || value.content;
        const preview = displayableProperty ? `${displayableProperty}`.substring(0, 80) : displayableProperty;
    
        if (!displayableProperty) {
            return <span title={JSON.stringify(value, undefined, 2)} className={`${styles.object} ${styles.placeholder}`} />;
        }
    
        return <span className={styles.content}>
            { JSON.stringify(preview) }
    
            { displayableProperty.length > 80 && <>
                <span>...&nbsp;</span>
                <span className={`${styles.truncated} ${styles.placeholder}`} />
            </>}
        </span>;
    }
}
