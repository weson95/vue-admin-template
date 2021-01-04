import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import NProgress from 'nprogress'
import './nprogress.less'
import { setTitle } from '@/util'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(to => {
  setTitle(to, router.app)
  NProgress.done()
  window.scrollTo(0, 0)
})

export default router
