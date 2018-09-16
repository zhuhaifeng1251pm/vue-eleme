import Vue from 'vue'
import Vuex from 'vuex'
import goods from '../modules/goods'
import carts from '../modules/carts'
import contents from '../modules/contents'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        goods,carts,contents
    }
})
export default store