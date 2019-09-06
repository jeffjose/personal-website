import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import { PUSH_POSTS, PUSH_CONTENT } from "./mutations";

Vue.use(Vuex);

const state = {
  posts: []
};

const mutations = {
  [PUSH_POSTS](state, posts) {
    console.log(posts);
    Vue.set(state, "posts", posts);
  }
};

const getters = {
  posts: ({ posts }) => posts,

  relatedPosts: (state, getters) => title => {
    title = `${title.replace(/\.adoc/, "")}.adoc`;

    return _.omit(state.posts, title);
  }
};

const actions = {
  getPosts({ commit, dispatch }) {
    return axios({
      // TODO
      url: "http://localhost:8080/_api/posts"
    }).then(function(response) {
      commit(PUSH_POSTS, response.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
