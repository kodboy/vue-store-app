import Vue from 'vue'
import Vuex from 'vuex'
import amy from './modules/amy'
import bob from './modules/bob'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    }
  },
  actions: {
    increment: ({ commit }) => {
      console.log(commit)
      commit('increment')
    },
    decrement: ({ commit }) => {
      commit('decrement')
    }
  },
  modules: {
    a: amy,
    b: bob
  }
})