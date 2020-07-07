const getters = {
  device: state => state.app.device,
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  routes: state => state.permission.routes
}

export default getters
