import { createI18n } from 'vue-i18n';
import { getBrowserLang } from '@/utils';
import zh from './locale/zh.json';
import en from './locale/en.json';


const messages = {
  zh,
  en
};

export const langList = [
  {
    name: 'English',
    value: 'en'
  },
  {
    name: 'Chinese',
    value: 'zh'
  }
];

export const LOCAL_STORAGE_KEY = 'language';

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLang(),
  // 设置备用语言
  fallbackLocale: 'zh',
  globalInjection: true,
  messages
});

export default i18n;
