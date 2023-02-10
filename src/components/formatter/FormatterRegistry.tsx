import { Formatter } from "./Formatter";

class FormatterRegistry {
    constructor(private formatters: Formatter[] = []) {
        this.formatters = formatters;
    }

    register(formatter: Formatter) {
        this.formatters.push(formatter);
    };

    getFormatters() {
        return this.formatters;
    }
}

export const registry = new FormatterRegistry();

export const useFormatter = (formatter: Formatter) => {
    registry.register(formatter);
}
