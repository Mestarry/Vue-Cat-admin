import Vue from 'vue'
import {
  Menu,
  Submenu,
  MenuItem,
  Button,
  Loading,
  Message,
  Notification,
  Scrollbar,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Scrollbar)

Vue.use(Loading.directive)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
