class Translations {
    constructor (translations, prefix) {
        this.translations = translations
        this.prefix = prefix
        this.language = 'en'
    }

    getTranslations = (key) => {
        return this.translations[this.language][this.prefix + key]
    }
}

export default Translations