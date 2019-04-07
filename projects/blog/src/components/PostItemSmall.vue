<template lang="pug">
  div.postitem
    div.wrapper(v-html="convert(adoc)", :class="'item-' + index")
</template>

<script>
const readingTime = require("reading-time");

const _ = require("lodash");

const asciidoctor = require("asciidoctor")();
//const highlightJsExt = require("asciidoctor-highlight.js");

class CustomConverter {
  constructor(adoc) {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    //this.readingTime = readingTime(adoc).text;
    this.readingTime = "xx mins";
  }
  convert(node, transform) {
    if (node.getNodeName() === "preamble" || node.getNodeName() === "open") {
      //console.log(node.getNodeName(), node.getContent());
      return node.getContent();
    } else if (node.getNodeName() == "section") {
      //console.log(node.getNodeName(), node.getContent());
      let attrs = "";

      // TODO
      //if(_.has(node, 'attributes.$$smap.role')) {
      //  let attrs = `${attrs} class=${node.attributes.$smap.role}`;
      //}

      //if(_.has(node, 'attributes.$$smap.id') ){
      //  let attrs = `${attrs} id=${node.attributes.$smap.id}`;
      //}

      return `
        <h${node.level + 1} ${attrs}>${node.title}</h${node.level + 1}>
        ${node.getContent()}
        `;
    } else if (
      node.getNodeName() == "paragraph" &&
      node.attributes.$$smap.role == "date"
    ) {
      node.lines = [`${node.lines[0]} · ${this.readingTime}`];

      return this.baseConverter.convert(node, transform);
    } else {
      //console.log(node.getNodeName());
      return this.baseConverter.convert(node, transform);
    }
  }
}

//const registry = asciidoctor.Extensions.create()
//highlightJsExt.register(registry)

export default {
  name: "PostItemSmall",
  created() {
    asciidoctor.ConverterFactory.register(new CustomConverter(this.adoc), [
      "html5"
    ]);
  },
  props: ["adoc", "index"],
  methods: {
    convert: function(str) {
      return asciidoctor.convert(str, {
        doctype: "book",
        //extension_registry: registry,
        //attributes: { showtitle: true, "source-highlighter": "highlightjs-ext" }
        attributes: { showtitle: true }
      });
    }
  }
};
</script>

<style scoped lang="sass">

$font-size: 1.35rem

// ----------- night mode ----------------

$text-color: white
$accent-color: #FF0088
$box-bg-color: #f6f9fc
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$bg-color: black


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853


// ----------- light mode ----------------

$text-color: rgba(0, 0, 0, .84)
$accent-color: #FF0088
$box-bg-color: #f6f9fc
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$bg-color: white


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853


.postitem

   background-color: $bg-color
   margin: 2rem 0

   &::v-deep .wrapper
     display: grid
     //grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr
     grid-template-columns: 5fr [content-start] 2fr [word-start] 350px 20px 350px [word-end] 2fr [content-end] 5fr
     grid-template-rows: [top-start] auto [top-end middle-start] auto [middle-end bottom-start] auto [bottom-end]

     color: $text-color


     @media (max-width: 800px)
       grid-template-columns: 20px [content-start] 2fr [word-start] auto [word-end] 2fr [content-end] 20px

     ::selection
       background: lighten($accent-color, 40%)

     *
       grid-column: word
       display: none

     img
       width: 100%

     h1, .date
       display: unset
       *
        display: unset


     // styles
     .imageblock.hero
        grid-row: top
        grid-column: word

     .date
        grid-row: middle
        color: $gray-color


     h1
        grid-row: bottom
        margin: 0

        font-weight: 500
        letter-spacing: -1px
        line-height: 3.5rem

     &.item-0
       .imageblock.hero

          display: unset

          grid-row: top
          grid-column: word

          *
            display: unset

       .date
          grid-row: middle
          color: $gray-color


       h1
          grid-row: bottom
          margin: 0
</style>
