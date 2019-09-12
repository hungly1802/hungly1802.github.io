import { extend } from './_helpers';
var translations = {};

/**
 * Add translations to a language.
 * @param {object}  text        Object of key/value translations.
 * @param {string}  language    The translated language.
 */
export function add(text: object, language: string) {
    if (typeof translations[language] == 'undefined') {
        translations[language] = {};
    }
    extend(translations[language], text as object);
}

/**
 * Find a translated text in a language.
 * @param   {string} text       The text to find the translation for.
 * @param   {string} language   The language to search in.
 * @return  {string}            The translated text.
 */
export function get(text: string, language?: string): string {
    if (
        typeof language == 'string' &&
        typeof translations[language] != 'undefined'
    ) {
        return translations[language][text] || text;
    }
    return text;
}

/**
 * Get all translated text in a language.
 * @param   {string} language   The language to search for.
 * @return  {object}            The translations.
 */
export function all(language: string): object {
    return translations;
}
