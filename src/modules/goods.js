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
        axios.get('http://localhost:3008/goods').then(res => {
            commit('getGoods',res.data)
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