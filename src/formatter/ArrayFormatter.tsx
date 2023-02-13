import { Value } from "../components/Value";
import { Formatter } from "./Formatter";

export class ArrayFormatter implements Formatter {

    matches(value: any): boolean {
        return Array.isArray(value);
    }
    
    format(value: any): JSX.Element {
        return <span className="list value">{
            (value as any[]).map((item, index) => <Value key={index} value={item} />)
        }</span>;
    }
}
