import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from "../api/index.js";

export default {
  async FETCH_NEWS({ commit }) {
    const response = await fetchNewsList();
    commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobsList();
    commit('SET_JOBS', response.data);
    return response;
  },
  async FETCH_USER({commit}, username) {
    const {data} = await fetchUserInfo(username);
    commit('SET_USER', data);
    return data;
  },
  async FETCH_ITEM({commit}, itemid) {
    const {data} = await fetchItemInfo(itemid);
    commit('SET_ITEM', data);
    return data;
  },
  async FETCH_LIST({commit}, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
};