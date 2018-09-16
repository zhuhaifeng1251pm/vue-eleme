import axios from 'axios'
const state = {
    contents:[]
}
const mutations = {
    getContents(state,contents) {
        state.contents.push(...contents)

    }
}
const actions = {
    getContents({commit}) {
        const uri = 'http://localhost:3008/ratings'
        axios.get(uri).then(res => {
            commit('getContents',res.data)

        }).catch(err=>{})
    }

}

const contents = {
    state,mutations,actions
}
export default contents