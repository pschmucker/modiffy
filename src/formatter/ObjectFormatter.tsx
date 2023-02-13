import { Formatter } from "./Formatter";

export class ObjectFormatter implements Formatter {

    matches(value: any): boolean {
        return typeof value === 'object';
    }
    
    format(value: any): JSX.Element {
        const displayableProperty = value.name || value.label || value.code || value.description || value.value || value.content;
        const preview = displayableProperty ? `${displayableProperty}`.substring(0, 80) : displayableProperty;
    
        if (!displayableProperty) {
            return <span title={JSON.stringify(value, undefined, 2)} className="object placeholder" />;
        }
    
        return <span className="content">
            { JSON.stringify(preview) }
    
            { displayableProperty.length > 80 && <>
                <span>...&nbsp;</span>
                <span className="truncated placeholder" />
            </>}
        </span>;
    }
}
