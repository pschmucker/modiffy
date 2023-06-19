import { i18n } from "i18next";
import { Formatter, formatterRegistry } from "../formatter";
import { Options, configOptions } from "./Options";
import i18nLib from '../i18n';


class Configuration {

    addFormatter(formatter: Formatter) {
        formatterRegistry.register(formatter);
        return this;
    }

    applyOptions(options: Partial<Options> = {}) {
        Object.assign(configOptions, options);
        return this;
    }

    usei18n(i18nApp: i18n, namespace = 'translation') {
        i18nLib.addResourceBundle('en', 'modiffy', i18nApp.getResourceBundle('en', namespace), true, true);
        i18nLib.addResourceBundle('fr', 'modiffy', i18nApp.getResourceBundle('fr', namespace), true, true);
        i18nLib.changeLanguage(i18nApp.language);

        i18nApp.on('languageChanged', lang => i18nLib.changeLanguage(lang));
        return this;
    }
}

export const configuration = new Configuration();
