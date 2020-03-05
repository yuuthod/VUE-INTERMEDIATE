import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters,
    mutations
})