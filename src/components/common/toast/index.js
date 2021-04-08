import Toast from "./Toast";

export default {
  install(Vue) {
    let toastConstructor = Vue.extend(Toast);
    let toast = new toastConstructor();
    toast.$mount();
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = toast;
  }
};
