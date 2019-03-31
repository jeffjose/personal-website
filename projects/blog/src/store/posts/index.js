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
  },
  [PUSH_CONTENT](state, payload) {
    Vue.set(state.contents, payload.title, payload.content);
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
      console.log("getPosts", response);
      commit(PUSH_POSTS, response.data);
    });
  },
  getPostContents({ commit, getters }, payload) {
    let inCache = _.has(getters.contents, payload.title);

    // The order is important
    //
    // Make a request to backend right away
    let t = new Date().getTime();
    let request = axios({
      url: payload.url
    }).then(function(response) {
      console.log("getPostContents", t, response);
      commit(PUSH_CONTENT, {
        title: payload.title,
        content: response.data + t
      });
    });

    // But return quickly if it is in the backend
    if (inCache == true) {
      let x = getters.contents[payload.title];
      console.log("Already existing, not making a request", x);
      return x;
    }

    // Return here when it a cache-miss
    return request;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
