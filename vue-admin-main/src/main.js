/*
 * @Description: 
 * @Author: jiying079
 * @Date: 2022-03-14 15:46:22
 * @LastEditTime: 2022-03-15 13:42:43
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);

registerMicroApps([
  { 
    name: 'app-vue-admin', 
    entry: 'http://localhost:9000', 
    container: '#appContainer', 
    activeRule: getActiveRule('#/layout/vue-admin-child'), 
  }, 
  { 
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer', 
    activeRule: getActiveRule('#/app-vue-hash')
  },
  { 
    name: 'uni-demo', 
    entry: 'http://localhost:8090', 
    container: '#appContainer', 
    activeRule: getActiveRule('#/pages')
  },
])

addGlobalUncaughtErrorHandler((event) => {
  const { message: msg } = event
  if(msg && msg.includes("died in status LOADING_SOURCE_CODE")){
    Message.error("请检查应用是否正常运行")
  }
})