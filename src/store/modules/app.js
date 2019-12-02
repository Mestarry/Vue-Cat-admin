import Cookies from 'js-cookie'
const app = {
  state: {
    device: 'desktop',
    sidebar: true
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
      Cookies.set('X-Device', device)
    },
    SET_SIDEBAR_TYPE: (state, type) => {
      state.sidebar = type
      Cookies.set('X-Sidebar', type)
    }
  },
  actions: {
    setSidebar({ commit }, type) {
      commit('SET_SIDEBAR_TYPE', type)
    }
  }
}

export default app
