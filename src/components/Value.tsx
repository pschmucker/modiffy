import { FC } from "react"

type ValueProps = {
    value: any,
    className?: string
}

export const Value: FC<ValueProps> = ({ value, className = '' }) => {

    const spanWrapper = (value: any): JSX.Element => {
        return <span className={`value ${className}`}>{ value }</span>;
    }

    const display = (value: any): JSX.Element => {
        if (value === undefined || value === null) {
            return <span className="empty placeholder" />;
        }

        if (typeof value === 'boolean') {
            return spanWrapper(value ? 'Yes' : 'No');
        }

        if (Array.isArray(value)) {
            const items = value.map(item => display(item));

            return <span className="list value">{
                items.map((item, index) => <span key={index} className="value">{ item }</span>)
            }</span>;
        }

        if (typeof value === 'object') {
            const displayableProperty = value.name || value.label || value.code || value.description || value.value || value.content;
            const preview = displayableProperty ? `${displayableProperty}`.substring(0, 80) : displayableProperty;

            if (!displayableProperty) {
                return <span title={JSON.stringify(value, undefined, 2)} className="object placeholder" />;
            }

            return spanWrapper(<>
                { JSON.stringify(preview) }

                { displayableProperty.length > 80 && <>
                    <span>...&nbsp;</span>
                    <span className="truncated placeholder" />
                </>}
            </>);
        }

        if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:\.\d+)?\+\d{2}:\d{2})$/.test(value)) {
            // TODO format date
            return spanWrapper(JSON.stringify(value));
        }

        // TODO handle custom formatters

        return spanWrapper(JSON.stringify(value));
    }

    return display(value);
}
