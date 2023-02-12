import i18n from "./i18n"

export const useTranslations = (language: string, translations: any) => {
    i18n.addResourceBundle(language, 'translation', translations, true, true);
}
