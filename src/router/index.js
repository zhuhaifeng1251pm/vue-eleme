import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Business from "../components/Business";
import Order from "../components/Order";
import Evaluate from "../components/Evaluate";
const routes = [
    { path: '/', component: Order },
    { path: '/evaluate', component: Evaluate },
    { path:'/business',component:Business}

]
const router = new VueRouter({
    mode: 'history',//去掉模拟的/#/
    routes
})
export default router