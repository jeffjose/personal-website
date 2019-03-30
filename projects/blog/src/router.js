import Vue from "vue";
import Router from "vue-router";

import store from "./store";

import HomeWrapper from "./views/HomeWrapper.vue";
import Home from "./views/Home.vue";
import Post from "./views/Post.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeWrapper,
      beforeEnter: (to, from, next) => {
        store.dispatch("posts/getPosts").then(function(response) {
          next();
        });
      },
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: ":title",
          component: Post
        }
      ]
    }
  ]
});
