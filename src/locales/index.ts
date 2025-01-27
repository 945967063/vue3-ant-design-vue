import { createI18n } from 'vue-i18n';
import cn from './zh-cn.json'; //引入中文语言包
import en from './en.json';
//引入的不同语言文件
const messages = {
  cn,
  en,
};
export const LOCALE_OPTIONS = [
  { label: '中文', value: 'cn' },
  { label: 'English', value: 'en' },
];
//这个类型可以自己配置，毕竟每个人做的都不一样
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false
  globalInjection: true, //全局生效$t
  locale: localStorage.getItem('slice-bank') || 'cn', // 默认cn翻译
  messages, //ES6解构
});

export default i18n;
