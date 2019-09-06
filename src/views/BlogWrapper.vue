<template lang="pug">
  div.blogwrapper
    Toolbar
    router-view(:key="$route.fullPath")
    Footer
</template>

<script>
import store from "@/store";

const Toolbar = () =>
  import(/*webpackChunkName: "toolbar"*/ "@/components/Toolbar.vue");
const Footer = () =>
  import(/*webpackChunkName: "footer"*/ "@/components/Footer.vue");

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
    let posts = store.getters["posts/posts"];

    if (!(`${to.params.title}.adoc` in posts)) {
      console.log("[BlogWrapper]: 404");
      next({ path: "404" });
      return;
    }
    next();
  }
};
</script>
