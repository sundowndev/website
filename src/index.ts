import Vue from 'vue';
import App from './App.vue';
import router from './router';

export default new Vue({
  el: '#app',
  router,
  render: (h: any) => h(App),
});
