<template lang="pug">
  div.post
    div.postitem
      PostItem(:adoc="contents")

    h2 More posts
    div.postitemblock(v-for="(post, key, index) in related")
      //PostItemBlock(:adoc="post.contents", :title="key")
      p {{post}} {{key}} {{index}}

</template>

<script>
const PostItem = () =>
  import(/*webpackChunkName: "post-item"*/ "@/components/PostItem.vue");
const PostItemBlock = () =>
  import(
    /*webpackChunkName: "post-item-block"*/ "@/components/PostItemBlock.vue"
  );
const Footer = () =>
  import(/*webpackChunkName: "footer"*/ "@/components/Footer.vue");

import { mapGetters, mapActions } from "vuex";

export default {
  name: "post",
  components: { PostItem, PostItemBlock, Footer },
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    }),
    contents() {
      return this.posts[this.$route.params.title + ".adoc"].contents;
    },
    related() {
      return this.posts[this.$route.params.title + ".adoc"].related;
    }
  }
};
</script>

<style scoped lang="sass">
.post

  display: grid
  grid-template-columns: [main-start] 1fr [word-start left-start] 350px [left-end] 20px [right-start]350px [right-end word-end] 1fr [main-end]

  grid-row-gap: 20px

  @media (max-width: 800px)
    grid-template-columns: [main-start] 20px [word-start left-start right-start] auto [left-end right-end] 20px [main-end]

  .postitem
    grid-column: main

  h2
    margin-top: 4rem
    grid-column: word

  .postitemblock:nth-child(even)
    grid-column: right

  .postitemblock:nth-child(odd)
    grid-column: left
</style>
