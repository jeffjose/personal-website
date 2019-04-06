<template lang="pug">
  div.blog
    //h1 home
    //h2 POST LIST
    //div(v-for="post in posts")
    //  router-link(:to="{path: post.name}") {{post.name}} {{post.time}}
    //router-link(:to="{path: 'non-exist'}") non-exist
    div.postitem(v-for="post in posts")
      PostItem(:adoc = "contents[post.name]")
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostItem from "@/components/PostItem.vue";

export default {
  name: "home",
  components: { PostItem },
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
      contents: "contents"
    })
  }
};
</script>

<style scoped lang="sass">
.blog
  //display: grid
  //grid-gap: 2px
  ////grid-template-columns: 1fr [content-start] 5fr [content-end] 1fr
  //grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr
  //grid-template-rows: repeat(6, 2fr)

  //.postitem
  //  grid-column: 1
</style>
