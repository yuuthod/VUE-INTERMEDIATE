import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// Higher-Order Components 하이오더컴포넌트
// import createListView from "../views/CreateListView.js"

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
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log("fetched");
            bus.$emit('end:spinner');
            next();
          })
          .catch(error => console.log(error));
        // console.log('to ', to); 어디로 가는지
        // console.log('from ', from); 어디에서 왔는지
        // console.log('next ', next); 어디로 이동할지
      }
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView('AskView')
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log("fetched");
            next();
          })
        }
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView('JobsView')
      component: JobsView,
      // beforeEnter: (to, from, next) => {
      //   bus.$emit('start:spinner');
      //   store.dispatch('FETCH_LIST', to.name)
      //     .then(() => {
      //       console.log("fetched");
      //       bus.$emit('end:spinner');
      //       next();
      //     })
      // }
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