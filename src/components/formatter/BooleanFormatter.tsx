import { Formatter } from "./Formatter";

export class BooleanFormatter implements Formatter {

    matches(value: any): boolean {
        return typeof value === 'boolean';
    }
    
    format(value: any): JSX.Element {
        return <span className="content">{ value ? 'Yes' : 'No' }</span>;
    }
}
