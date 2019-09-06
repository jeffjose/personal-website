import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import { PUSH_POST, PUSH_POSTS } from "./mutations";

Vue.use(Vuex);

var _ = require("lodash");

const state = {
  posts: []
};

const mutations = {
  [PUSH_POSTS](state, posts) {
    console.log(posts);
    Vue.set(state, "posts", posts);
  },
  [PUSH_POST](state, post) {
    console.log(post);
    state.posts[post.name] = post;
  }
};

const getters = {
  posts: ({ posts }) => posts,

  relatedPosts: (state, getters) => name => {
    name = `${name.replace(/\.adoc/, "")}.adoc`;

    return _.omit(state.posts, name);
  }
};

const actions = {
  getPosts({ commit, dispatch }) {
    return axios({
      // TODO
      //url: "http://localhost:8080/_api/posts"
      url: "/_api/posts"
    }).then(function(response) {
      commit(PUSH_POSTS, response.data);
    });
  },
  getPost({ commit, dispatch }, name) {
    return axios({
      // TODO
      //url: `http://localhost:8080/_api/post/${name}`
      url: `/_api/post/${name}`
    }).then(function(response) {
      commit(PUSH_POST, response.data);
      return response;
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
