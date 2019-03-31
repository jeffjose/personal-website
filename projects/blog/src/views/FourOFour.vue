<template lang="pug">
  div.blog
    h1 404
    h2 POST LIST
    div(v-for="post in posts")
      router-link(:to="{path: post.name}") {{post.name}} {{post.time}}
    router-link(:to="{path: 'non-exist'}") non-exist
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FourOFour",
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    })
  }
};
</script>

<style scoped lang="sass"></style>
