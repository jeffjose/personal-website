<template lang="pug">
  div.blog
    //h1 home
    //h2 POST LIST
    //div(v-for="post in posts")
    //  router-link(:to="{path: post.name}") {{post.name}} {{post.time}}
    //router-link(:to="{path: 'non-exist'}") non-exist
    div
    div
    div
    div
    div
    div
    div
    div
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    })
  }
};
</script>

<style scoped lang="sass">
.blog
  display: grid
  grid-template-columns: 1fr [content-start] minmax(1rem, 15rem) [word-start] 43rem [word-end] minmax(1rem, 15rem) [content-end] 1fr
  grid-column-gap: 1rem

  div
    height: 100vh
    background: lighten(blue, 40%)
</style>
