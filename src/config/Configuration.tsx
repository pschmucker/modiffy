import { Formatter, formatterRegistry } from "../formatter";
import { Options, configOptions } from "./Options";


class Configuration {

    addFormatter(formatter: Formatter) {
        formatterRegistry.register(formatter);
        return this;
    }

    applyOptions(options: Partial<Options> = {}) {
        Object.assign(configOptions, options);
        return this;
    }
}

export const configuration = new Configuration();
