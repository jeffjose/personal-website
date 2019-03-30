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
  [PUSH_CONTENT](state, payload) {
    state.contents[payload.title] = payload.content;
  }
};

const getters = {
  posts: ({ posts }) => posts,
  contents: ({ contents }) => contents
};

const actions = {
  getPosts({ commit }) {
    return axios({
      url:
        "https://api.github.com/repos/jeffjose/personal-website/contents/projects/blog/src/posts"
    }).then(function(response) {
      console.log(response);
      commit(PUSH_POSTS, response.data);
    });
  },
  getPostContents({ commit, getters }, payload) {
    console.log(payload.url);
    console.log(payload.title);
    return axios({
      url: payload.url
    }).then(function(response) {
      console.log(payload.url);
      console.log(payload.title);
      commit(PUSH_CONTENT, { title: payload.title, content: response.data });
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
