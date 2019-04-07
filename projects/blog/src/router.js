import Vue from "vue";
import Router from "vue-router";

import store from "./store";

var _ = require("lodash");

import Home from "./views/Home.vue";
import BlogWrapper from "./views/BlogWrapper.vue";
import Blog from "./views/Blog.vue";
import Post from "./views/Post.vue";
import FourOFour from "./views/FourOFour.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    console.log("scroll");
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
        console.log("[/]: beforeEnter", to, from);
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
          path: "/404",
          component: FourOFour
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
            var index = _.findIndex(posts, {
              name: `${to.params.title}.adoc`
            });

            if (index < 0) {
              console.log("404");
              next({ path: "404" });
              return;
            }
            store
              .dispatch("posts/getPostContents", {
                url: posts[index].download_url,
                title: posts[index].name
              })
              .then(function(response) {
                next();
              });
          }
        }
      ]
    }
  ]
});
