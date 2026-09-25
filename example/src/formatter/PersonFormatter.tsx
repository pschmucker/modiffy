import { Formatter } from 'modiffy'
import { JSX } from 'react';

export class PersonFormatter implements Formatter {

    matches(value: any): boolean {
        return Object.hasOwn(value ?? {}, 'fullName');
    }
    
    format(value: any): JSX.Element {
        return value.fullName;
    }
}
