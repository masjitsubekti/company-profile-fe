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
  ModalPlugin,
  FormTextareaPlugin,
  LayoutPlugin,
  TooltipPlugin,
  FormDatepickerPlugin,
  FormCheckboxPlugin,
  BreadcrumbPlugin,
  SpinnerPlugin 
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
  ModalPlugin,
  FormTextareaPlugin,
  LayoutPlugin,
  TooltipPlugin,
  FormDatepickerPlugin,
  FormCheckboxPlugin,
  BreadcrumbPlugin,
  SpinnerPlugin
}

Object.entries(components).forEach(([name, component]) => {
    Vue.use(component)
})