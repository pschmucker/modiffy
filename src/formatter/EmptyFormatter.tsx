import { Formatter } from "./Formatter";

export class EmptyFormatter implements Formatter {

    matches(value: any): boolean {
        return value === undefined || value === null;
    }
    
    format(): JSX.Element {
        return <span className="empty placeholder" />;
    }
}
