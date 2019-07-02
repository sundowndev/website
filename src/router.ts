import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Home from './views/home.vue';
import NotFound from './views/notFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '', name: 'home', component: Home },
  {
    path: '/notfound',
    name: 'not_found',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/notfound',
  },
];

export default new VueRouter({ routes });
