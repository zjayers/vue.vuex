// -------- State -------- //
import { stockData } from "@/data/stockData";

const state = {
  stocks: [],
};

// -------- Getters -------- //
const getters = {
  getStocks: (state) => {
    return state.stocks;
  },
};

// -------- Mutations -------- //
const mutations = {
  initStockData: (state, payload) => {
    state.stocks = payload;
  },
  randomizeStockPrices: (state) => {
    state.stocks.forEach((stock) => {
      const fluctuation = Math.floor(Math.random() * (20 - -20) + -20);
      stock.price += fluctuation;
    });
  },
};

// -------- Actions -------- //
const actions = {
  initStockData: ({ commit }) => {
    commit("initStockData", stockData);
  },
  randomizeStockPrices: ({ commit }) => {
    commit("randomizeStockPrices");
  },
};

export default { state, getters, mutations, actions };
