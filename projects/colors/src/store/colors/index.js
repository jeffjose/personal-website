import Vue from "vue";
import Vuex from "vuex";

import { PUSH_COLOR } from "./mutations";

import db from "@/db";

Vue.use(Vuex);

const state = {
  colors: []
};

const mutations = {
  [PUSH_COLOR](state, color) {
    state.colors.push(color);
  }
};

const getters = {
  colors: ({ colors }) => colors
};

const actions = {
  colors({ commit }) {
    db.collection("colors").onSnapshot(snapshot => {
      snapshot.docChanges.forEach(function(change) {
        console.log(change);
        if (change.type == "added") {
          commit(PUSH_COLOR, {
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
