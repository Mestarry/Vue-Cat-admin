import Vue from 'vue'
import { login, getInfo } from '@/api/user'
import { resetRouter } from '@/router'
const user = {
  state: {
    token: '',
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
          Vue.ls.set('Token', data, 7 * 60 * 60 * 1000)
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
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.clear()
        resetRouter()
        resolve()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

export default user
