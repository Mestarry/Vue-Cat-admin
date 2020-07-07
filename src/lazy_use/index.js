import Vue from 'vue'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Switch,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Row,
  Col,
  Progress,
  Card,
  Carousel,
  CarouselItem,
  ColorPicker,
  Timeline,
  TimelineItem,
  Loading,
  Message,
  Notification,
  Scrollbar,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'

Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Row)
Vue.use(Col)
Vue.use(Progress)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(ColorPicker)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Scrollbar)

Vue.use(Loading.directive)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
