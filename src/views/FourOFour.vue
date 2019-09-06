<template lang="pug">
  div.fourofour
    Toolbar
    h1 404
    h2 POST LIST
    div(v-for="post in posts")
      router-link(:to="{path: post.name}") {{post.name}} {{post.time}}
    router-link(:to="{path: 'non-exist'}") non-exist
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const Toolbar = () =>
  import(/*webpackChunkName: "toolbar"*/ "@/components/Toolbar.vue");

export default {
  name: "FourOFour",
  components: { Toolbar },
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    })
  }
};
</script>

<style scoped lang="sass"></style>
