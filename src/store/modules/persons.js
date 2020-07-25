import { login, signup, checkJWT } from "../../services/eventServices"
 
const state = {
  user: {
    id: null,
    name: null,
    email: null,
    iat: null
  }
};

const mutations = {
  // set user
  SET_USER(state, user) {
    state.user.id = user.id
    state.user.name = user.name
    state.user.email = user.email
    state.user.iat = user.iat || null
  },
  CLEAR_USER(state) {
    state.user = {
      id: null,
      name: null,
      email: null,
      iat: null
    }
  }
};

const actions = {
  // attempt login
  async attemptLogin ({ commit }, userInput) {
    let userResponse = await login( userInput );
    if (userResponse.data 
      && userResponse.data.message 
      && userResponse.data.message === 'email not registered') {
      alert('email doesnt exist, wanna make a profile?')
    } else {
      let user = userResponse;
      commit("SET_USER", user)
    }
  },

  async attemptSignup (context, userInput) {
    await signup( userInput );
  },

  async checkAuth ({ commit }) {
    if (localStorage.token) {
      let result = await checkJWT()
      commit("SET_USER", result.data.user)
    } else {
      console.log('no token :(')
    }
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};