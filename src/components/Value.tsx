import { FC } from "react"
import { ArrayFormatter, BooleanFormatter, DateFormatter, DefaultFormatter, EmptyFormatter, Formatter, ObjectFormatter } from "./formatter"
import { registry } from "./formatter/FormatterRegistry"

type ValueProps = {
    value: any,
    className?: string
}

export const Value: FC<ValueProps> = ({ value, className = '' }) => {
    
    const formatters: Formatter[] = [
        ...registry.getFormatters(),
        new EmptyFormatter(),
        new BooleanFormatter(),
        new ArrayFormatter(),
        new ObjectFormatter(),
        new DateFormatter(),
        new DefaultFormatter()
    ];
    
    return <span className={`value ${className}`}>{
        formatters.find(formatter => formatter.matches(value))?.format(value) || <span className="no-matching-formatter"></span>
    }</span>;
}
