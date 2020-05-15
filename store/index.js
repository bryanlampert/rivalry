import * as matches from '../matches.json'

export const state = () => ({
  matches: [],
  betSlip: []
})

export const mutations = {
  SET_MATCHES(state, payload) {
    state.matches = payload
  },
  ADD_SLIP(state, payload) {
    const slipAlreadyAdded = state.betSlip.some(
      (slip) => slip.outcomeId === payload.outcomeId
    )

    if (!slipAlreadyAdded) {
      state.betSlip.push(payload)
    }
  },
  REMOVE_SLIP(state, payload) {
    const index = state.betSlip
      .map((x) => x.outcomeId)
      .indexOf(payload.outcomeId)

    state.betSlip.splice(index, 1)
  }
}

export const actions = {
  async GET_MATCH_DATA({ commit }) {
    await commit('SET_MATCHES', matches.default.matches)
  },
  SET_BET_SLIP({ commit }, payload) {
    commit('ADD_SLIP', payload)
  },
  DEL_BET_SLIP({ commit }, payload) {
    commit('REMOVE_SLIP', payload)
  }
}
