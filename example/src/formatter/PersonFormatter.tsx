import { Formatter } from 'modiffy'

export class PersonFormatter implements Formatter {

    matches(value: any): boolean {
        return Object.hasOwn(value ?? {}, 'fullName');
    }
    
    format(value: any): JSX.Element {
        return value.fullName;
    }
}
