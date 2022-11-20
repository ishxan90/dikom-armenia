import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18next
.use(Backend)
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng: 'arm',
    lng: 'arm',
    debug: true,
    detection:{
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation:{
        escapeValue: false
    }
})