import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// Higher-Order Components 하이오더컴포넌트
import createListView from "../views/CreateListView.js"

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: "/news",
      name: "news",
      // component: createListView('NewsView')
      component: NewsView,
      beforeEnter: (to, from, next) => {
        console.log('to ', to);
        console.log('from ', from);
        console.log('next ', next);
      }
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView('AskView')
      component: AskView
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView('JobsView')
      component: JobsView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
});