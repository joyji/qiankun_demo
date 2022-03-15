/*
 * @Description: 入口js
 * @Author: jiying079
 * @Date: 2022-01-24 15:13:41
 * @LastEditTime: 2022-03-15 13:32:50
 */
import './public-path';
import Vue from 'vue'
import App from './App'
import setupQk from './micro/index'

Vue.config.productionTip = false
App.mpType = 'app'
// Vue.prototype.$store = store

// const app = new Vue({
//     ...App
// })
// app.$mount()

// function render(props = {}) {
//     const { container } = props;
//     instance = new Vue({
//         ...App,
//         store,
//         render: (h) => h(App)
//     }).$mount(container ? container.querySelector('#app') : '#app')
// }

// function createApp() {
//     return new Vue({
//         ...App,
//         // store,
//         render: (h) => h(App)
//     })
// }

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//     console.log('独立运行时');
//     createApp().$mount('#app')
// }
// if (window.__POWERED_BY_QIANKUN__) {
//     setupQk(createApp)
// }

// /**
//  * @description:  重点：抛出子应用生命周期
//  */
//  export { bootstrap, mount, unmount } from "./micro/index";

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    ...App,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
//测试全局变量污染
console.log('window.a',window.a)

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}