import Vue from 'vue'
import { 
  BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  ButtonPlugin,
  TablePlugin,
  ToastPlugin,
  CardPlugin,
  PopoverPlugin,
  ModalPlugin 
} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

const components = { BootstrapVue,
  IconsPlugin,
  BootstrapVueIcons,
  ButtonPlugin,
  TablePlugin,
  ToastPlugin,
  CardPlugin,
  PopoverPlugin,
  ModalPlugin 
}

Object.entries(components).forEach(([name, component]) => {
    Vue.use(component)
})