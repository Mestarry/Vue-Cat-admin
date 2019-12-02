import { login, getInfo, logout } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
const user = {
  state: {
    token: getToken(),
    roles: [],
    name: 'admin',
    avatar: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },
  actions: {
    // user login
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const { data } = response
          commit('SET_TOKEN', data)
          setToken(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // get user information
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const { data } = response
          const { roles, name, avatar } = data
          commit('SET_ROLES', roles)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // user logout
    Logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resetRouter()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
