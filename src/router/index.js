import Vue from 'vue';
import VueRouter from 'vue-router';

import Archive from '../components/front/Archive.vue';
import Article from '../components/front/Article.vue';
import Console from '../components/back/Console.vue';
import Login from '../components/back/Login.vue';
import Articles from '../components/back/Articles.vue';
import Editor from '../components/back/Editor.vue';
import Links from '../components/back/Links.vue';
import Account from '../components/back/Account.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/archive',
    name: 'archive',
    component: Archive,
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
  },
  {
    path: '/',
    component: Login,
  },
  {
    path: '/console',
    component: Console,
    children: [
      {
        path: '',
        component: Articles,
      },
      {
        path: 'articles',
        name: 'articles',
        component: Articles,
      },
      {
        path: 'editor',
        name: 'editor',
        component: Editor,
      },
      {
        path: 'links',
        name: 'links',
        component: Links,
      },
      {
        path: 'account',
        name: 'account',
        component: Account,
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
