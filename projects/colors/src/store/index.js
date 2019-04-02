import vue from "vue";
import vuex from "vuex";

import user from "@/store/user";
import colors from "@/store/colors";

vue.use(vuex);

const store = new vuex.Store({
  state: {},

  modules: {
    user,
    colors
  }
});

export default store;
