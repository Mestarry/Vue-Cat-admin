import Vue from 'vue'
import { login, getInfo, logout } from '@/api/user'
import { resetRouter } from '@/router'
import { X_TOKEN } from '@/store/mutation-types'
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
          commit('SET_TOKEN', data.token)
          Vue.ls.set(X_TOKEN, data.token, 7 * 60 * 60 * 1000)
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
        logout().then(response => {
          const { data } = response
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          Vue.ls.remove(X_TOKEN)
          resetRouter()
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
