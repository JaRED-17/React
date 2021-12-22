class Translations {
    constructor (translations, prefix) {
        this.translations = translations
        this.prefix = prefix
        this.language = 'en'
    }

    getTranslations = (key, replacements = {}) => {
        if (Object.keys(replacements).length > 0) {
            let translation = this.translations[this.language][this.prefix + key]

            for (key in replacements) {
                translation = translation.replace('{' + key + '}', replacements[key])
            }
            return translation
        }
        return this.translations[this.language][this.prefix + key]
    }
}

export default Translations