<template lang="pug">
  div.blogwrapper
    Toolbar
    router-view(:key="$route.fullPath")
    Footer
</template>

<script>
import store from "@/store";

import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";

var _ = require("lodash");
export default {
  name: "blogwrapper",
  components: { Toolbar, Footer },
  beforeRouteUpdate(to, from, next) {
    if (
      to.path == "/404" ||
      to.path == "/blog" ||
      to.path == "/blog/" ||
      to.path == "/"
    ) {
      next();
      return;
    }

    // This is the same function as router.js -> beforeEnter
    //
    // The following is called when user navigates between /post-title1 -> /post-title2 (component reuse)
    // The other one is called when user goes directly to /post-title
    //
    console.log("[BlogWrapper]: beforeRouteUpdate", to, from);
    let posts = store.getters["posts/posts2"];
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
        title: to.params.title
      })
      .then(function(response) {
        next();
      });
  }
};
</script>
