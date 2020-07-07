import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const userName = ['admin']
const password = ['123456']

const login = (options) => {
  const body = getBody(options)
  if (!userName.includes(body.userName) || !password.includes(body.password)) {
    return builder({ isLogin: true }, '账户或密码错误', 401)
  }

  return builder({
    'id': Mock.mock('@guid'),
    'name': Mock.mock('@name'),
    'userName': 'admin',
    'password': '123456',
    'status': 1,
    'telephone': '',
    'roleId': 'admin',
    'token': '4291d7da9005377ec9aec4a71ea837f'
  }, '', 200)
}

const info = (options) => {
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': 'Aoligei',
    'username': 'admin',
    'password': '123456',
    'avatar': '/avatar.jpg',
    'roles': ['admin']
  }
  return builder(userInfo, '', 200)
}

const logout = () => {
  return builder({}, '[测试接口] 注销成功', 200)
}

Mock.mock(/\/user\/login/, 'post', login)
Mock.mock(/\/user\/info/, 'get', info)
Mock.mock(/\/user\/logout/, 'post', logout)
