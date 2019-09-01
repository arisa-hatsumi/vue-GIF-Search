import axios from 'axios';

const state = {
  results: [],
  loading: false
}

const getters = {
  results(state) {
    return state.results
  },
  loading(state) {
    return state.loading
  }
}

const actions = {
  async doSearch({
    commit
  }, keyword) {
    const key = "wBf9x9EQLSGQmtVFaAYfD1VUQe4uODTT";
    const limit = 50;
    const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${key}&limit=${limit}`;
    const results = await axios.get(url);
    const data = results.data.data;
    const imageUrls = data.map(o => o.images.downsized.url);
    commit("setResults", imageUrls)

    // commit('setResults', data.results)

  }
}
const mutations = {
  setResults(state, results) {
    state.results = results;
  },

}

const search = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default search;
