const state = {
  user: null,
  accessToken: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  StateUser: state => state.user,
  StateAccessToken: state => state.accessToken,
};

const actions = {};

const mutations = {
  setUser(state, user){
    state.user = user
  },
  setAccessToken(state, accessToken){
    state.accessToken = accessToken
  },
  logOut(state){
      state.user = null
      state.accessToken = null
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
