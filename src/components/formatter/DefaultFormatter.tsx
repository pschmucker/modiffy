import { Formatter } from "./Formatter";

export class DefaultFormatter implements Formatter {

    matches(_value: any): boolean {
        return true;
    }
    
    format(value: any): JSX.Element {
        return <span className="content">{ JSON.stringify(value) }</span>;
    }
}
