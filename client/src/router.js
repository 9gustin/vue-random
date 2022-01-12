import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

import Home from './views/Home.vue';
import Detail from './views/Detail.vue';
import NotFound from './views/NotFound.vue';

import { getPage, getBlocks, getDatabase } from './services/notion';
import { getPageFields } from './utils/getPageFields';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
      async beforeEnter(to, from, next) {
        to.params.pages = await getDatabase()
        next()
      }
    },
    {
      path: '/blog/:id',
      name: 'detail',
      component: Detail,
      props: true,
      async beforeEnter(to, from, next) {
        try {
          const pageData = await getPage(to.params.id);
          pageData.data = getPageFields(pageData);
          pageData.blocks = await getBlocks(to.params.id);
  
          to.params.page = pageData;
        }
        catch {
          next({name: '404'})
        }

        next()
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: {name: '404'}
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;