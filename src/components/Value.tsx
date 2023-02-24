import { FC } from "react"
import { ArrayFormatter, BooleanFormatter, DateFormatter, DefaultFormatter, EmptyFormatter, Formatter, formatterRegistry, ObjectFormatter } from "../formatter"
import * as styles from "./Diff.module.scss"

type ValueProps = {
    value: any,
    className?: string
}

export const Value: FC<ValueProps> = ({ value, className = '' }) => {
    
    const formatters: Formatter[] = [
        ...formatterRegistry.getFormatters(),
        new EmptyFormatter(),
        new BooleanFormatter(),
        new ArrayFormatter(),
        new ObjectFormatter(),
        new DateFormatter(),
        new DefaultFormatter()
    ];
    
    return <span className={`${styles.value} ${className}`}>{
        formatters.find(formatter => formatter.matches(value))?.format(value) || <span className="no-matching-formatter"></span>
    }</span>;
}
