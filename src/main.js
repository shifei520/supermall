import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
//引入自己封装的插件tosat
import toast from "components/common/toast/index";
//引入fastclick
import FastClick from "fastclick";
//引入图片懒加载
import LazyLoad from "vue-lazyload";
// import "./utils/rem";
Vue.config.productionTip = false;

//使用toast插件
Vue.use(toast);
Vue.prototype.$bus = new Vue();

//使用fastclick(解决300ms延迟)
FastClick.attach(document.body);
import "lib-flexible/flexible.js";
//使用懒加载
Vue.use(LazyLoad);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
