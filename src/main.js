import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

import store from './store';
import router from './router';

import './style/index.scss';

Vue.use(VueResource);

Vue.filter('toDate', date => {
  const d = new Date(date)
  return d.getFullYear() + '年' +
    (d.getMonth() + 1) + '月' +
    d.getDate() + '日'
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
