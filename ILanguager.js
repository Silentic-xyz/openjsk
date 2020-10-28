
/**
    @typedef {
        'ab' | 'aa' | 'af' | 'ak' |
        'sq' | 'am' | 'ar' | 'an' |
        'hy' | 'as' | 'av' | 'ae' |
        'ay' | 'az' | 'bm' | 'ba' |
        'eu' | 'be' | 'bn' | 'bh' |
        'bi' | 'bs' | 'br' | 'bg' |
        'my' | 'ca' | 'km' | 'ch' |
        'ce' | 'ny' | 'zh' | 'cu' |
        'cv' | 'kw' | 'co' | 'cr' |
        'hr' | 'cs' | 'da' | 'dv' |
        'nl' | 'dz' | 'en' | 'eo' |
        'et' | 'ee' | 'fo' | 'fj' |
        'fi' | 'fr' | 'ff' | 'gd' |
        'gl' | 'lg' | 'ka' | 'de' |
        'ki' | 'el' | 'kl' | 'gn' |
        'gu' | 'ht' | 'ha' | 'he' |
        'hz' | 'hi' | 'ho' | 'hu' |
        'is' | 'io' | 'ig' | 'id' |
        'ia' | 'ie' | 'iu' | 'ik' |
        'ga' | 'it' | 'ja' | 'jv' |
        'kn' | 'kr' | 'ks' | 'kk' |
        'rw' | 'kv' | 'kg' | 'ko' |
        'kj' | 'ku' | 'ky' | 'lo' |
        'la' | 'lv' | 'lb' | 'li' |
        'ln' | 'lt' | 'lu' | 'mk' |
        'mg' | 'ms' | 'ml' | 'mt' |
        'gv' | 'mi' | 'mr' | 'mh' |
        'ro' | 'mn' | 'na' | 'nv' |
        'nd' | 'ng' | 'ne' | 'se' |
        'no' | 'nb' | 'nn' | 'ii' |
        'oc' | 'oj' | 'or' | 'om' |
        'os' | 'pi' | 'pa' | 'ps' |
        'fa' | 'pl' | 'pt' | 'qu' |
        'rm' | 'rn' | 'ru' | 'sm' |
        'sg' | 'sa' | 'sc' | 'sr' |
        'sn' | 'sd' | 'si' | 'sk' |
        'sl' | 'so' | 'st' | 'nr' |
        'es' | 'su' | 'sw' | 'ss' |
        'sv' | 'tl' | 'ty' | 'tg' |
        'ta' | 'tt' | 'te' | 'th' |
        'bo' | 'ti' | 'to' | 'ts' |
        'tn' | 'tr' | 'tk' | 'tw' |
        'ug' | 'uk' | 'ur' | 'uz' |
        've' | 'vi' | 'vo' | 'wa' |
        'cy' | 'fy' | 'wo' | 'xh' |
        'yi' | 'yo' | 'za' | 'zu'
    } Language
 */

const langs = {
    'ab': 'Abkhazian',
    'aa': 'Afar',
    'af': 'Afrikaans',
    'ak': 'Akan',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'an': 'Aragonese',
    'hy': 'Armenian',
    'as': 'Assamese',
    'av': 'Avaric',
    'ae': 'Avestan',
    'ay': 'Aymara',
    'az': 'Azerbaijani',
    'bm': 'Bambara',
    'ba': 'Bashkir',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bh': 'Bihari languages',
    'bi': 'Bislama',
    'bs': 'Bosnian',
    'br': 'Breton',
    'bg': 'Bulgarian',
    'my': 'Burmese',
    'ca': 'Catalan, Valencian',
    'km': 'Central Khmer',
    'ch': 'Chamorro',
    'ce': 'Chechen',
    'ny': 'Chichewa, Chewa, Nyanja',
    'zh': 'Chinese',
    'cu': 'Church Slavonic, Old Bulgarian, Old Church Slavonic',
    'cv': 'Chuvash',
    'kw': 'Cornish',
    'co': 'Corsican',
    'cr': 'Cree',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'dv': 'Divehi, Dhivehi, Maldivian',
    'nl': 'Dutch, Flemish',
    'dz': 'Dzongkha',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'ee': 'Ewe',
    'fo': 'Faroese',
    'fj': 'Fijian',
    'fi': 'Finnish',
    'fr': 'French',
    'ff': 'Fulah',
    'gd': 'Gaelic, Scottish Gaelic',
    'gl': 'Galician',
    'lg': 'Ganda',
    'ka': 'Georgian',
    'de': 'German',
    'ki': 'Gikuyu, Kikuyu',
    'el': 'Greek (Modern)',
    'kl': 'Greenlandic, Kalaallisut',
    'gn': 'Guarani',
    'gu': 'Gujarati',
    'ht': 'Haitian, Haitian Creole',
    'ha': 'Hausa',
    'he': 'Hebrew',
    'hz': 'Herero',
    'hi': 'Hindi',
    'ho': 'Hiri Motu',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'io': 'Ido',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ia': 'Interlingua (International Auxiliary Language Association)',
    'ie': 'Interlingue',
    'iu': 'Inuktitut',
    'ik': 'Inupiaq',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jv': 'Javanese',
    'kn': 'Kannada',
    'kr': 'Kanuri',
    'ks': 'Kashmiri',
    'kk': 'Kazakh',
    'rw': 'Kinyarwanda',
    'kv': 'Komi',
    'kg': 'Kongo',
    'ko': 'Korean',
    'kj': 'Kwanyama, Kuanyama',
    'ku': 'Kurdish',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lb': 'Letzeburgesch, Luxembourgish',
    'li': 'Limburgish, Limburgan, Limburger',
    'ln': 'Lingala',
    'lt': 'Lithuanian',
    'lu': 'Luba-Katanga',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'gv': 'Manx',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mh': 'Marshallese',
    'ro': 'Moldovan, Moldavian, Romanian',
    'mn': 'Mongolian',
    'na': 'Nauru',
    'nv': 'Navajo, Navaho',
    'nd': 'Northern Ndebele',
    'ng': 'Ndonga',
    'ne': 'Nepali',
    'se': 'Northern Sami',
    'no': 'Norwegian',
    'nb': 'Norwegian Bokmål',
    'nn': 'Norwegian Nynorsk',
    'ii': 'Nuosu, Sichuan Yi',
    'oc': 'Occitan (post 1500)',
    'oj': 'Ojibwa',
    'or': 'Oriya',
    'om': 'Oromo',
    'os': 'Ossetian, Ossetic',
    'pi': 'Pali',
    'pa': 'Panjabi, Punjabi',
    'ps': 'Pashto, Pushto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'qu': 'Quechua',
    'rm': 'Romansh',
    'rn': 'Rundi',
    'ru': 'Russian',
    'sm': 'Samoan',
    'sg': 'Sango',
    'sa': 'Sanskrit',
    'sc': 'Sardinian',
    'sr': 'Serbian',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala, Sinhalese',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'st': 'Sotho, Southern',
    'nr': 'South Ndebele',
    'es': 'Spanish, Castilian',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'ss': 'Swati',
    'sv': 'Swedish',
    'tl': 'Tagalog',
    'ty': 'Tahitian',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'tt': 'Tatar',
    'te': 'Telugu',
    'th': 'Thai',
    'bo': 'Tibetan',
    'ti': 'Tigrinya',
    'to': 'Tonga (Tonga Islands)',
    'ts': 'Tsonga',
    'tn': 'Tswana',
    'tr': 'Turkish',
    'tk': 'Turkmen',
    'tw': 'Twi',
    'ug': 'Uighur, Uyghur',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    've': 'Venda',
    'vi': 'Vietnamese',
    'vo': 'Volap_k',
    'wa': 'Walloon',
    'cy': 'Welsh',
    'fy': 'Western Frisian',
    'wo': 'Wolof',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'za': 'Zhuang, Chuang',
    'zu': 'Zulu',
};
Object.freeze(langs);
module.exports.langs = langs;

const { IPlugin } = require('./IPlugin');

class ILanguager extends IPlugin {
    /**
     * Languager module
     * @param {import('./Bot').Bot} bot Bot
     * @param {Language} lang Language to use
     */
    constructor(bot, lang) {
        super(bot);
        this.lang = langs.hasOwnProperty(lang) ? lang : 'en';
    }

    /**
     * Create new languager with another language
     * @param {Language} lang Language to use
     * @returns {ILanguager}
     */
    async getLanguager(lang) { throw new Error("Not implemented"); }
    /**
     * Translate string
     * @param {string} path Languager path
     * @param {*} format Format options
     * @returns {Promise<string>}
     */
    async translate(path, format) { throw new Error("Not implemented"); }
    /**
     * Format string
     * @param {string} str String to format
     * @param {*} obj Format options
     * @returns {Promise<string>}
     */
    format(str, obj) { throw new Error("Not implemented"); }
}
module.exports.ILanguager = ILanguager;

class BasicLanguager extends ILanguager {
    async getLanguager(lang) {
        return new BasicLanguager(lang);
    }

    async translate(path, format) {
        return "Not implemented";
    }

    format(str, obj) {
        Object.entries(obj).forEach(([k, v]) => {
            str = str.split(`{${k}}`).join(v);
        });

        return str;
    }
}
module.exports.BasicLanguager = BasicLanguager;
