const state = {
  count: 1
}

const mutations = {
  oooo(state) {
    state.count ++
  },
  xxxx(state) {
    state.count --
  }
}

const actions = {
  oooo: ({ commit }) => {
    commit('oooo')
  },
  xxxx: ({ commit }) => {
    commit('xxxx')
  }
}

export default {
  state,
  mutations,
  actions
}