import vue from "vue";
import vuex from "vuex";

import posts from "@/store/posts";

vue.use(vuex);

const store = new vuex.Store({
  state: {},

  modules: {
    posts
  }
});

export default store;
