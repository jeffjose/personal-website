<template lang="pug">
  div.post
    //h1 content
    //div(v-html="asciidoctor(postContent)")
    //h2 OTHER POSTS
    //div(v-for="post in posts")
    //  router-link(:to="{path: post.name}") {{post.name}}
    //router-link(:to="{path: 'non-exist'}") non-exist
    p {{convert(postContent)}}
    div
    div.wrapper(v-html="convert(postContent)")
</template>

<script>
import { mapGetters, mapActions } from "vuex";

//var kramed = require("kramed");

var asciidoctor = require("asciidoctor");

export default {
  name: "post",
  created() {
    this.getPostContents(this.$route.params.title);
  },
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
      contents: "contents"
    }),
    postContent() {
      return this.contents[this.$route.params.title];
    }
  },
  methods: {
    ...mapActions("posts", {
      getPosts: "getPosts",
      getPostContents: "getPostContents"
    }),
    convert: function(str) {
      debugger;
      return asciidoctor().convert(str);
    }
  }
};
</script>

<style scoped lang="sass">
.post
  display: grid
  grid-template-columns: 1fr [content-start] 1fr [word-start] repeat(4, 1fr) [word-end] 1fr [content-end] 1fr
  grid-template-rows: 2rem [content-start] 1fr [content-end] 2rem

  &::v-deep .wrapper
    grid-column: content
    grid-row: content

    display: grid
    grid-template-columns: [content-start] 1fr [word-start] repeat(4, 1fr) [word-end] 1fr [content-end]


    // Post styles go here
    p
      grid-column: word

    h1
      grid-column: word
      font-size: 2.7rem
      font-weight: 500
      letter-spacing: -2px
      line-height: 3.5rem

    img
      width: 100%

    p:has(+ img)
      grid-column: content
</style>
