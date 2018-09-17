import axios from "axios";
const state = {
  contents: []
};
const mutations = {
  getContents(state, contents) {
    state.contents.push(...contents);
  }
};
const actions = {
  getContents({ commit }) {
    const uri =
      "https://raw.githubusercontent.com/zhuhaifeng1251pm/vue-eleme/master/api/db.json";
    axios
      .get(uri)
      .then(res => {
        commit("getContents", res.data.ratings);
      })
      .catch(err => {});
  }
};

const contents = {
  state,
  mutations,
  actions
};
export default contents;
