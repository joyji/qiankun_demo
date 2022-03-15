import Vue from "vue";

/*
 * @Description: qiankun 启动挂载
 * @Author: jiying079
 * @Date: 2022-01-30 14:53:56
 * @LastEditTime: 2022-03-13 14:39:05
 */
let app = null;
let createApp = null;
let appEmitIns = null;

/**
 * @description:  监测数据变化
 */
function Monitor(props) {
  appEmitIns = props;
  appEmitIns.onGlobalStateChange((value, prev) => {
    console.log(`[子应用接收到值变化 - ${props.name}]:`, value, prev);
  }, true);

  Vue.prototype.$microProps = props;
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;
}

/**
 * @description:  子应用初始化
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[子应用] bootstrap");
}

/**
 * @description:  子应用挂载
 */
export async function mount(props) {
  console.log("[子应用] mount", props);
  if (!app) {
    const { container } = props;
    app = createApp();
    app.$mount((container ? container.querySelector('#app') : '#app'));
  }
  Monitor(props);
}

/**
 * @description:  子应用卸载
 */
export async function unmount() {
  console.log("[子应用] unmount");
  app.$destroy();
  app.$el.innerHTML = "";
  app = null;
  appEmitIns = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
 export async function update(props) {
  console.log('update props', props);
}

/**
 * @description:  挂载乾坤子应用
 */
function setupQk(_createApp) {
  // qiankun 将会在微应用 bootstrap 之前注入一个运行时的 publicPath 变量，你需要做的是在微应用的 entry js 的顶部添加
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  console.log(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
  createApp = _createApp;
}
export default setupQk;


