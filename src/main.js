import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import './index.less'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Antd)

window.VW = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
