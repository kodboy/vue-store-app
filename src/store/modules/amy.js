const state = {
  money: 1
}

const mutations = {
  go(state) {
    state.money ++
  },
  back(state) {
    state.money --
  }
}

const actions = {
  go: ({ commit }) => {
    commit('go')
  },
  back: ({ commit }) => {
    commit('back')
  }
}

export default {
  state,
  mutations,
  actions
}