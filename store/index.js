import axios from "axios";

export const state = () => ({
  postsList: []
})

export const mutations = {

  updatePosts(state, data) {
    state.postsList = data;
  }

}

export const actions = {
  async getData({ commit }) {
    const api = 'https://jsonplaceholder.typicode.com/posts';
      const posts = await axios.get(api).then((response) => {
        return response.data
      })

      commit('updatePosts', posts)
  }
}
