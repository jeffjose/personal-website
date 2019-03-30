import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import { PUSH_POSTS, GET_POST_LIST } from "./mutations";

Vue.use(Vuex);

const state = {
  postList: [],
  postContents: {}
};

const mutations = {
  [PUSH_POSTS](state, posts) {
    Vue.set(state, "postList", posts);
  }
};

const getters = {
  postList: ({ postList }) => postList
};

const actions = {
  getPostList({ commit }) {
    axios({
      url:
        "https://api.github.com/repos/jeffjose/personal-website/contents/projects/blog/src/posts",
      method: "GET",
      headers: {
        Authorization: "ec4b16a71008ae36c9b7fddeb156edc2605cdccc"
      }
    }).then(function(response) {
      console.log(response);
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
