import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from './pl.json';

export const resources = { pl };
export const AVAILABLE_SYSTEM_LANGS = ['pl'];

i18n.use(initReactI18next).init({
  resources,
  initImmediate: false,
  fallbackLng: 'pl',
  supportedLngs: AVAILABLE_SYSTEM_LANGS,
  defaultNS: 'translations',
  debug: false,
  react: {
    useSuspense: true,
  },
});
