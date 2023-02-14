import { Formatter } from 'modiffy'
import React from 'react';

export class ReviewFormatter implements Formatter {

    matches(value: any): boolean {
        return 'title' in value && 'content' in value;
    }
    
    format(value: any): JSX.Element {
        return <div style={{ backgroundColor: 'lavender', padding: '0.5em 1em', borderRadius: '5px' }}>
            <div style={{ fontWeight: '600', marginBottom: '4px' }}>{value.title}</div>
            <div style={{ fontSize: '0.9em', fontStyle: 'italic' }}>{value.content.substring(0, 80)}...</div>
        </div>;
    }
}
