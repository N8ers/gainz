import { 
  getDaysConsumption, 
  removeConsumedFood, 
  addConsumedFood, 
  reorderConsumedAt } from "../../services/eventServices"
 
const state = {
  consumed: null
};

const mutations = {
  SET_CONSUMED(state, consumed) {
    state.consumed = consumed
  }
};

const actions = {
  async getFoods ({ commit }, date) {
    console.log('getFoods')
    let foods = await getDaysConsumption(date);
    commit("SET_CONSUMED", foods.data)
  },
  async removeFood (context, food) {
    let { id } = food
    return await removeConsumedFood(id)
  },
  async addFood (context, payload) {
    // console.log('payload', payload)
    return await addConsumedFood(payload)
  },
  async restructureConsumedAt (context, payload) {
    let { foods, user } = payload
    for (let i = 0; i < foods.length; i++) {
      foods[i].sort_order = i
    }
    let newPayload = { foods, user: user.id }
    return await reorderConsumedAt(newPayload)
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};