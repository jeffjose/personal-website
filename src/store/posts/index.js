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
    console.log(posts);
    Vue.set(state, "posts", _.reverse(posts));
  },
  [PUSH_CONTENT](state, payload) {
    Vue.set(state.contents, payload.title, payload.content);
  }
};

const getters = {
  posts: ({ posts }) => posts,
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
  getPosts({ commit, dispatch }) {
    return axios({
      url:
        "https://api.github.com/repos/jeffjose/personal-website/contents/src/posts"
    }).then(function(response) {
      commit(PUSH_POSTS, response.data);

      _.map(response.data, function(x) {
        dispatch("getPostContents", { title: x.name, url: x.download_url });
      });
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
