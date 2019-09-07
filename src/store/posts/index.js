import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import { PUSH_POST, PUSH_POSTS } from "./mutations";

Vue.use(Vuex);

import { omit } from "lodash";

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

    return omit(state.posts, name);
  }
};

const actions = {
  getPosts({ commit, dispatch }) {
    return axios({
      url: process.env.VUE_APP_ROOT_API + "/_api/posts"
    }).then(function(response) {
      commit(PUSH_POSTS, response.data);
    });
  },
  getPost({ commit, dispatch }, name) {
    return axios({
      url: process.env.VUE_APP_ROOT_API + `/_api/post/${name}`
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
