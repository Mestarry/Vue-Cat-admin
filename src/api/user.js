import request from '@/utils/request'

export function login(parameter) {
  return request({
    url: '/user/login',
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
