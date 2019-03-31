<template lang="pug">
  div.blog
    h1 home
    h2 POST LIST
    div(v-for="post in posts")
      router-link(:to="{path: post.name}") {{post.name}} {{post.time}}
    div non-exist
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

<style scoped lang="sass"></style>
