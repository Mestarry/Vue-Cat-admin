import Vue from 'vue'
const app = {
  state: {
    device: 'desktop',
    sidebar: {
      opened: true,
      withoutAnimation: false
    }
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
      Vue.ls.set('Device', device)
    },
    SET_SIDEBAR_TYPE: (state, type) => {
      state.sidebar.opened = type
      Vue.ls.set('Sidebar', type, 7 * 24 * 60 * 60 * 1000)
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        Vue.ls.set('sidebarStatus', 1)
      } else {
        Vue.ls.set('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Vue.ls.set('sidebarStatus', 0, 7 * 24 * 60 * 60 * 1000)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    }
  },
  actions: {
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setSidebar({ commit }, type) {
      commit('SET_SIDEBAR_TYPE', type)
    },
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    }
  }
}

export default app
