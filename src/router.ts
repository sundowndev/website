import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Hello.vue';
import notFound from './components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', name: 'home', component: Home },
  { path: '/hi', name: 'hello', component: notFound },
  {
    path: '/notfound',
    name: 'not_found',
    component: notFound,
  },
  {
    path: '*',
    redirect: '/notfound',
  },
];

export default new VueRouter({ mode: 'history', routes });
