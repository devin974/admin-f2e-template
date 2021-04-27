const getDefaultLanguage = () => {
  const lang = window.navigator.language || window.navigator.userLanguage;
  let locale = 'zh_CN';

  if (lang.indexOf('en') === 0) {
    locale = 'en_US';
  } else if (lang === 'zh-TW' || lang === 'zh-HK') {
    locale = 'zh_TW';
  }

  return locale;
};

const defaultState = {
  locale: getDefaultLanguage(),
};

const mutations = {
  setLocale(state, locale) {
    Object.assign(state, {}, {
      locale,
    });
  },
};

export default {
  state: defaultState,
  mutations,
};
