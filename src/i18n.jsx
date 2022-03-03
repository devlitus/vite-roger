import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import CA from './translations/ca.json'
import ES from './translations/es.json'
const resources = {
  ca: {
    translation: CA
  },
  es: {
    translation: ES
  }
}

i18n.use(initReactI18next).init({
  resources,
  // lng: "ca",
  fallbackLng: 'ca',
  supportedLngs: ['ca', 'es'],
  returnObjects: true,
  debug: true,

  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
})

export default i18n
