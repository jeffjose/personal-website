<template lang="pug">
  div.post
    div.postitem
      PostItem(:adoc="contents")

    h2 More posts
    div.postitemblock(v-for="(post, key, index) in getMore()")
      PostItemBlock(:adoc="post.contents", :title="key")

</template>

<script>
import PostItem from "@/components/PostItem.vue";
import PostItemBlock from "@/components/PostItemBlock.vue";
import Footer from "@/components/Footer.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "post",
  components: { PostItem, PostItemBlock, Footer },
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
      relatedPosts: "relatedPosts"
    }),
    contents() {
      return this.posts[this.$route.params.title + ".adoc"].contents;
    }
  },
  methods: {
    ...mapActions("posts", {
      getMore: function() {
        return this.relatedPosts(this.$route.params.title);
      }
    })
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
