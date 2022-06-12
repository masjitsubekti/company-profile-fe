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
  SpinnerPlugin,
  PaginationPlugin
} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

const components = {
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
  SpinnerPlugin,
  PaginationPlugin
}

Object.entries(components).forEach(([name, component]) => {
  Vue.use(component)
})