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
  MessageBox,
  Message,
  Notification,
  Scrollbar
} from 'element-ui'

import VeLine from 'v-charts/lib/line.common' // v-charts图表
import VeHistogram from 'v-charts/lib/histogram.common'

Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)

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

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
