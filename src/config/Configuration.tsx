import { Formatter, formatterRegistry } from "../formatter";

class Configuration {

    addFormatter(formatter: Formatter) {
        formatterRegistry.register(formatter);
        return this;
    }
}

export const configuration = new Configuration();
