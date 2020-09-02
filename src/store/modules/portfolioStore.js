// -------- State -------- //
const state = {
  portfolio: null,
};

// -------- Getters -------- //
const getters = {
  getPortfolio: (state) => {
    return state.portfolio;
  },
};

// -------- Mutations -------- //
const mutations = {
  mutatePortfolio(state, payload) {
    state.portfolio = payload;
  },
};

// -------- Actions -------- //
const actions = {
  updatePortfolio({ commit }, payload) {
    commit("mutatePortfolio", payload);
  },
};

export default { state, getters, mutations, actions };
