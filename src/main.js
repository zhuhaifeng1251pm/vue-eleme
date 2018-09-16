import Vue from "vue";
import App from "./App.vue";
import "./assets/global.scss";
Vue.config.productionTip = false;
import router from "./router/";
import store from './store/index'
import moment from 'moment'//导入文件

Vue.prototype.$moment = moment;//赋值使用
new Vue({
  render: h => h(App),
  router,store
}).$mount("#app");
