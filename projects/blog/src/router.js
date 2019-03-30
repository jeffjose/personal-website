import Vue from "vue";
import Router from "vue-router";

import store from "./store";

var _ = require("lodash");

import HomeWrapper from "./views/HomeWrapper.vue";
import Home from "./views/Home.vue";
import Post from "./views/Post.vue";
import FourOFour from "./views/FourOFour.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
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
          path: "/404",
          component: FourOFour
        },
        {
          path: ":title",
          component: Post,
          beforeEnter: (to, from, next) => {
            console.log(to.params.title);
            console.log(store);
            let posts = store.getters["posts/posts"];
            var index = _.findIndex(posts, {
              name: `${to.params.title}.md`
            });

            if (index < 0) {
              console.log("404");
              next({ path: "404" });
              return;
            }

            store
              .dispatch("posts/getPostContents", {
                url: posts[index].download_url,
                title: to.params.title
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
