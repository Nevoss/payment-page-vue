import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {Form} from 'form-wrapper-js'

import './assets/scss/index.scss'

Vue.config.productionTip = false

Form.defaults.options.validation.defaultMessage = ({label}) => `${label} must be valid.`

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
