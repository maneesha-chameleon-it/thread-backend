"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const error_codes_1 = (0, tslib_1.__importDefault)(require("@exceptions/error_codes"));
const config_1 = (0, tslib_1.__importDefault)(require("config"));
let defaultLanguage = config_1.default.get('serverConfig.defaultLanguage');
/**
 * Singleton implementation of translation class
 * TODO: Add locking mechanism to have exclusive access on update to this
 */
class Translations {
    constructor() {
        this.translations = {};
    }
    /**
     * Provide translation for the given key.
     * If not found returns the key
     * @param {*} key
     * @param {*} language
     */
    translate(key, language) {
        if (!language) {
            language = defaultLanguage;
        }
        if (!this.translations[language]) {
            console.error(error_codes_1.default.INVALID_LANGUAGE, language);
            return key;
        }
        return this.translations[language][key] ? this.translations[language][key] : key;
    }
    loadTranslations() {
        this.translations = {};
        // TODO: Load translations from database
    }
}
exports.default = new Translations();
//# sourceMappingURL=index.js.map