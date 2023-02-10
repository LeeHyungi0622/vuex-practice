import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  // 변이 핸들러 method
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
    decrement(state, payload) {
      state.count -= payload.amount;
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
