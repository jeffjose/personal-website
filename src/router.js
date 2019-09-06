import Vue from "vue";
import Router from "vue-router";

import store from "./store";

var _ = require("lodash");

const Home = () => import("./views/Home.vue");
const BlogWrapper = () => import("./views/BlogWrapper.vue");
const Blog = () => import("./views/Blog.vue");
const Post = () => import("./views/Post.vue");
const FourOFour = () => import("./views/FourOFour.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blog",
      component: BlogWrapper,
      beforeEnter: (to, from, next) => {
        console.log("[/]: beforeEnter");
        store.dispatch("posts/getPosts").then(function(response) {
          next();
        });
      },
      children: [
        {
          name: "blog",
          path: "",
          component: Blog
        },
        {
          path: ":title.:ext?",
          component: Post,
          beforeEnter(to, from, next) {
            // This is the same function as BlogWrapper.vue -> beforeRouteUpdate
            //
            // The following is called when user goes directly to /post-title
            // The other one is called when user navigates between /post-title1 -> /post-title2 (component reuse)
            //
            console.log("[/:title]: beforeEnter");
            let posts = store.getters["posts/posts"];

            store
              .dispatch("posts/getPost", to.params.title)
              .then(function(response) {
                // TODO
                next();
              });

            if (!(`${to.params.title}.adoc` in posts)) {
              console.log("[router]: 404");
              next({ name: "fourofour" });
              return;
            }
            next();
          }
        }
      ]
    },
    {
      path: "*",
      name: "fourofour",
      component: FourOFour
    }
  ]
});
