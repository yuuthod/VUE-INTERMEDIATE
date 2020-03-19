import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

//상태관리 도구
export const store = new Vuex.Store({
         state: {
           news: [],
           ask: [],
           jobs: [],
           user: {},
           item: {},
           list: []
         },
         getters: {
          fetchedAsk(state) {
            return state.ask;
          },
          fetchedJobs(state) {
            return state.jobs;
          },
          fetchedNews(state) {
            return state.news;
          },
          fetchedUser(state) {
            return state.user;
          },
          fetchedItem(state) {
            return state.item;
          }
         },
         mutations,
         actions
       });
