import { Formatter } from 'modiffy'

export class PersonFormatter implements Formatter {

    matches(value: any): boolean {
        return 'fullName' in value;
    }
    
    format(value: any): JSX.Element {
        return value.fullName;
    }
}
