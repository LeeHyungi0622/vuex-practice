import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
    decrement(state, payload) {
      state.count -= payload.amount;
    }
  },
  actions: {},
  modules: {},
});
