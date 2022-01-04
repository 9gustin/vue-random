import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog/:id',
      name: 'detail',
      component: Detail,
      props: true
    }
  ]
});
