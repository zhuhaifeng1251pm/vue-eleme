import Vue from "vue";
import App from "./App.vue";
import "./assets/global.scss";
Vue.config.productionTip = false;
import router from "./router/";
import store from './store/index'
new Vue({
  render: h => h(App),
  router,store
}).$mount("#app");
