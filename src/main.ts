import Vue from 'vue';
import App from './app';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import VueCookie from 'vue-cookie'

import 'element-ui/lib/theme-chalk/index.css';
import '@style/index.scss'

Vue.use(ElementUI);
Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
