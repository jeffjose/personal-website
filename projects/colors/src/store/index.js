import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/user";
import colors from "@/store/colors";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},

  modules: {
    user,
    colors
  }
});

export default store;
