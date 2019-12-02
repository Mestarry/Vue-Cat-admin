import request from '@/utils/request'

export function login(parameter) {
  return request({
    url: '/user/login',
    method: 'post',
    data: parameter,
    transformRequest: [
      function(data) {
        data = JSON.stringify(data)
        return data
      }
    ]
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
