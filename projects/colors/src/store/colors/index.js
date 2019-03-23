import Vue from "vue";
import Vuex from "vuex";

var _ = require("lodash");

import { PUSH_COLOR, UPDATE_COLOR } from "./mutations";

import db from "@/db";

Vue.use(Vuex);

const state = {
  colors: []
};

const mutations = {
  [PUSH_COLOR](state, color) {
    state.colors.push(color);
  },
  [UPDATE_COLOR](state, color) {
    var index = _.findIndex(state.colors, { id: color.id });

    state.colors.splice(index, 1, color.colors);
  }
};

const getters = {
  colors: ({ colors }) => colors
};

const actions = {
  colors({ commit }) {
    db.collection("colors").onSnapshot(snapshot => {
      snapshot.docChanges.forEach(function(change) {
        console.log(change, change.doc.data());
        if (change.type == "added") {
          commit(PUSH_COLOR, {
            id: change.doc.id,
            ...change.doc.data()
          });
        } else if (change.type == "modified") {
          commit(UPDATE_COLOR, {
            id: change.doc.id,
            ...change.doc.data()
          });
        }
      });
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
