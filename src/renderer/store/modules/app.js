const state = {
  masterip: '',
  barinfo: null,
  netWork: {
    ip: '127.0.0.1',
    port: '12880'
  }
}
const mutations = {
  SAVE_Master_IP (state, masterip) {
    state.masterip = masterip
  },
  SAVE_BAR_info (state, barinfo) {
    state.barinfo = barinfo
  }

}
const actions = {
  saveMaster ({ commit }, masterip) {
    // do something async
    commit('SAVE_Master_IP', masterip)
  },
  saveBarInfo ({ commit }, barinfo) {
    // do something async
    commit('SAVE_BAR_info', barinfo)
  }
}
export default {
  state,
  mutations,
  actions
}
