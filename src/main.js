import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './plugins/element';
// eslint-disable-next-line import/order
import ElementLocale from 'element-ui/lib/locale';
import i18n from './plugins/i18n';

Vue.config.productionTip = false;

ElementLocale.i18n((key, value) => i18n.t(key, value));

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
