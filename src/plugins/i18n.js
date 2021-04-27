import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import twLocale from 'element-ui/lib/locale/lang/zh-TW';

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};

  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      let elementLocale;

      if (locale === 'zh_CN') {
        elementLocale = zhLocale;
      } else if (locale === 'en_US') {
        elementLocale = enLocale;
      } else if (locale === 'zh_TW') {
        elementLocale = twLocale;
      }

      messages[locale] = {
        ...elementLocale,
        ...locales(key),
      };
    }
  });

  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'zh_CN',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh_CN',
  messages: loadLocaleMessages(),
});
