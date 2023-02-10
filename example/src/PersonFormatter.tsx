import { Formatter } from 'modiffy'

export class PersonFormatter implements Formatter {

    matches(value: any): boolean {
        return value?.hasOwnProperty('fullName');
    }
    
    format(value: any): JSX.Element {
        return value.fullName;
    }
}
