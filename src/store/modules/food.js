import { getAllFoods, addNewFood, removeFoodById } from "../../services/eventServices"
 
const state = {
  foods: null
};

const mutations = {
  // set foods
  SET_FOODS(state, foods) {
    state.foods = foods
  }
};

const actions = {
  // get foods
  async getFoods ({ commit }) {
    let foods = await getAllFoods();
    commit("SET_FOODS", foods)
  },

  // add food
  async addFood (context, newFood) {
    return await addNewFood(newFood);
  },

  // delete food
  async removeFood (context, id) {
    return await removeFoodById(id)  
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};