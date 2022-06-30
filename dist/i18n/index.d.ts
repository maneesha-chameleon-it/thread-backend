/**
 * Singleton implementation of translation class
 * TODO: Add locking mechanism to have exclusive access on update to this
 */
declare class Translations {
    translations: {};
    constructor();
    /**
     * Provide translation for the given key.
     * If not found returns the key
     * @param {*} key
     * @param {*} language
     */
    translate(key: any, language: any): any;
    loadTranslations(): void;
}
declare const _default: Translations;
export default _default;
