import Vue from "vue";
import Vuex from "vuex";

import food from "./modules/food";
import consumed from "./modules/consumed";
import persons from "./modules/persons";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    food,
    consumed,
    persons
  }
});
