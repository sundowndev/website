import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Hello.vue';
import Hello from './components/HelloDecorator.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', name: 'home', component: Home },
  { path: '/hi', name: 'hello', component: Hello },
  {
    path: '/notfound',
    name: 'not_found',
    component: Hello,
    beforeEnter: () => {},
  },
];

export default new VueRouter({ mode: 'history', routes });
