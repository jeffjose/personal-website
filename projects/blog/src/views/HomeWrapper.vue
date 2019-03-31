<template>
  <router-view></router-view>
</template>

<script>
import store from "@/store";

var _ = require("lodash");
export default {
  name: "homewrapper",

  beforeRouteUpdate(to, from, next) {
    // This is the same function as router.js -> beforeEnter
    //
    // The following is called when user navigates between /post-title1 -> /post-title2 (component reuse)
    // The other one is called when user goes directly to /post-title
    //
    console.log("[HomeWrapper]: beforeRouteUpdate");
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
};
</script>
