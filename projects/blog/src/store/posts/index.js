import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import { PUSH_POSTS, PUSH_CONTENT } from "./mutations";

Vue.use(Vuex);

const state = {
  posts: [],
  contents: {}
};

const mutations = {
  [PUSH_POSTS](state, posts) {
    Vue.set(state, "posts", posts);
    console.log("done");
  },
  [PUSH_CONTENT](state, post, content) {
    state.contents[post] = content;
  }
};

const getters = {
  posts: ({ posts }) => posts
};

const actions = {
  getPosts({ commit }) {
    console.log("getposts");
    return axios({
      url:
        "https://api.github.com/repos/jeffjose/personal-website/contents/projects/blog/src/posts"
    }).then(function(response) {
      console.log(response);
      commit(PUSH_POSTS, response.data);
    });
  },
  getPostContents({ commit, getters }, title) {
    console.log("getPostContents");
    console.log(getters.posts[0]);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
