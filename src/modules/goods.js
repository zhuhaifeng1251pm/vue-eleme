import axios from 'axios'
const state = {
    goods:[]
}
const mutations = {
    getGoods(state,goods) {
        state.goods.push(...goods)

    }
}
const actions = {
    getGoods({ commit }) {
        axios.get('https://raw.githubusercontent.com/zhuhaifeng1251pm/vue-eleme/master/api/db.json').then(res => {
            commit('getGoods',res.data.goods)
        })
    }
}
const getters = {
    goodsNameList(state) {
        return state.goods.map(t => t.name)
    }
}
const goods = {
    state,mutations,actions,getters
}
export default goods