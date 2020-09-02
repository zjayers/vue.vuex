import Vue from "vue";
import Vuex from "vuex";
import stockStore from "@/store/modules/stockStore";
import portfolioStore from "@/store/modules/portfolioStore";

// Setup Vuex Connection
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stockStore,
    portfolioStore,
  },
});
