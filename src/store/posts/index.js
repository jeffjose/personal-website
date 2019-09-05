import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import { PUSH_POSTS2, PUSH_CONTENT } from "./mutations";

Vue.use(Vuex);

const state = {
  posts2: [],
  contents: {}
};

const mutations = {
  [PUSH_POSTS2](state, posts2) {
    console.log(posts2);
    Vue.set(state, "posts2", _.reverse(posts2));
  },
  [PUSH_CONTENT](state, payload) {
    Vue.set(state.contents, payload.title, payload.content);
  }
};

const getters = {
  posts2: ({ posts2 }) => posts2,
  contents: ({ contents }) => contents,

  content: (state, getters) => title => {
    title = `${title.replace(/\.adoc/, "")}.adoc`;
    return state.contents[title];
  },

  relatedContents: (state, getters) => title => {
    title = `${title.replace(/\.adoc/, "")}.adoc`;

    return _.toPairs(_.omit(state.contents, title));
  }
};

const actions = {
  getPosts2({ commit, dispatch }) {
    return axios({
      url: "http://localhost:8080/_api/posts"
    }).then(function(response) {
      commit(PUSH_POSTS2, response.data);
    });
  },
  getPostContents({ commit, getters }, payload) {
    payload.title = `${payload.title.replace(/\.adoc/, "")}.adoc`;

    let inCache = _.has(getters.contents, payload.title);

    // The order is important
    //
    // Make a request to backend right away
    let request = axios({
      url: payload.url
    }).then(function(response) {
      commit(PUSH_CONTENT, {
        title: payload.title,
        content: response.data
      });
    });

    // But return quickly if it is in the backend
    if (inCache == true) {
      return getters.contents[payload.title];
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
