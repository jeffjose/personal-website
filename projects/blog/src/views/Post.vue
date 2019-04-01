<template lang="pug">
  div.post
    //h1 content
    //div(v-html="asciidoctor(postContent)")
    //h2 OTHER POSTS
    //div(v-for="post in posts")
    //  router-link(:to="{path: post.name}") {{post.name}}
    //router-link(:to="{path: 'non-exist'}") non-exist
    div
    div.wrapper(v-html="convert(postContent)")
</template>

<script>
import { mapGetters, mapActions } from "vuex";

//var kramed = require("kramed");

var asciidoctor = require("asciidoctor")();

class CustomConverter {
  constructor() {
    this.baseConverter = asciidoctor.Html5Converter.$new();
  }
  convert(node, transform) {
    console.log(node.getNodeName());
    if (
      node.getNodeName() === "preamble" ||
      node.getNodeName() === "open" ||
      node.getNodeName() === "section"
    ) {
      return node.getContent();
    }
    return this.baseConverter.convert(node, transform);
  }
}

asciidoctor.ConverterFactory.register(new CustomConverter(), ["html5"]);

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
      let x = `

This is a long long heading. It goes on and on for a long time.
===============================================================

image::https://unsplash.it/1920/1080?random[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

_Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch._

Lorem *ipsum dolor* amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch. Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. The command +ls -ltr+ can typically be used right before. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

Main header
===========

image::https://unsplash.it/1920/1080?random[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

Second heading
--------------

[.fullbleed]
image::https://unsplash.it/1920/1080?random[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

`;

      return asciidoctor.convert(x, {
        doctype: "book",
        attributes: { showtitle: true }
      });
      //return new CustomConverter().convert(str, {
      //  doctype: "book",
      //  attributes: { showtitle: true }
      //});
    }
  }
};
</script>

<style scoped lang="sass">
.post

  &::v-deep .wrapper
    margin-top: 3rem
    display: grid
    grid-template-columns: 1fr [content-start] 1fr [word-start] 43rem [word-end] 1fr [content-end] 1fr

    color: rgba(0, 0, 0, 0.84)

    *
      grid-column: word

    // Post styles go here
    h1
      font-size: 2.7rem
      font-weight: 500
      letter-spacing: -2px
      line-height: 3.5rem

    h2
      font-size: 2.3rem
      font-weight: 500
      letter-spacing: -2px
      line-height: 3.5rem

    h3
      font-size: 2.0rem
      font-weight: 500
      letter-spacing: -2px
      line-height: 3.5rem

    img
      width: 100%

    p
      font-size: 1.35rem

    .fullbleed
      grid-column: 1 / -1
</style>
