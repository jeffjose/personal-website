<template lang="pug">
  div.postitem
    div.wrapper(v-html="convert(adoc)")
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
  name: "PostItem",
  created() {
    asciidoctor.ConverterFactory.register(new CustomConverter(this.adoc), [
      "html5"
    ]);
  },
  props: ["adoc"],
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
   margin-top: 1rem

   &::v-deep .wrapper
     display: grid
     grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr

     color: $text-color

     @media (max-width: 800px)
       grid-template-columns: 20px [content-start] 2fr [word-start] auto [word-end] 2fr [content-end] 20px


     *
       grid-column: word


     // Post styles go here
     ::selection
       background: lighten($accent-color, 40%)
     h1
       font-size: 2.7rem
       font-weight: 500
       letter-spacing: -2px
       line-height: 3.5rem

     h2
       font-size: 2.3rem
       font-weight: 500
       letter-spacing: -1px

     h3
       font-size: 2.0rem
       font-weight: 500
       letter-spacing: -1px
       margin: 2rem 0 1rem 0

     h4
       font-size: 1.9rem
       font-weight: 500
       letter-spacing: -1px
       margin: 2rem 0 1rem 0

     h5
       font-size: 1.5rem
       font-weight: 500
       letter-spacing: -1px
       margin: 2rem 0 1rem 0

     img
       width: 100%

     p
       font-size: $font-size

       em
         font-size: 1.45rem

         code
           font-style: normal

     .fullbleed
       grid-column: 1 / -1

     .imageblock

       .title
         text-align: center
         font-size: 1.1rem
         margin: 1rem 0

     .big
       grid-column: content

     // For inline code
     p  code
       background-color: $box-bg-color
       padding: 3px 4px
       font-size: 1.2rem
       color: $accent-color


     .listingblock
       padding: 0 1rem
       #border-radius: .2rem
       background-color: $box-bg-color
       margin-top: 1em

       .content

         code::selection
           background: darken($box-bg-color, 30%)
           color: white

       .title
         color: darken($box-bg-color, 30%)
         float: right
         margin-top: .5rem
         pointer-events: none

     a
       color: $text-color

     .checklist
        list-style-type: none

        ul
          padding:0

     dl
       dt
         font-size: $font-size
         font-weight: 700
       dd
         p
           margin-top: 0.5rem

     .quoteblock
       font-size: 1.7rem
       color: $blockquote-color
       //border-left: .5rem solid $accent-color

       blockquote
         margin-left: 3rem
         font-style: italic
         margin-right: 0

       .attribution
         text-align: right
         margin-top: -1rem
         margin-bottom: 1rem

         a
           color: $blockquote-color

         br
           display: block
           margin: -0.5rem 0
           content: ""

         cite
           font-size: 1.1rem
           line-height: 0

     .videoblock
       position: relative
       width: 100%
       height: 0
       padding-bottom: 56.25%

       iframe
         position: absolute
         top: 0
         left: 0
         width: 100%
         height: 100%

     .subtitle
       margin-top: -1.5rem
       color: $gray-color

       p
         margin-top: 0rem
         font-size: 1.5rem
         line-height: 2rem

     .date
       color: $gray-color
       margin-top: 0rem

       p
         margin-top: 0rem
         font-size: 1rem

     .admonitionblock
       font-size: $font-size

       &.note, &.tip, &.important, &.warning, &.caution
         padding: 1rem 0

         td.icon
           div
             margin: 0 2rem
             font-weight: 700
             font-size: 1rem
             text-transform: uppercase
             user-select: none

       &.note
         background-color: $box-bg-color
         border: 1px solid darken($box-bg-color, 10%)
         border-radius: 3px

         td.icon
           div
             color: darken($box-bg-color, 30%)

       &.tip
         background-color: lighten($green, 45%)
         border: 1px solid darken(lighten($green, 45%), 10%)
         border-radius: 3px

         td.icon
           div
             color: $green

       &.important
         background-color: lighten($blue, 35%)
         border: 1px solid darken(lighten($blue, 35%), 10%)
         border-radius: 3px

         td.icon
           div
             color: $blue

       &.warning
         background-color: lighten($yellow, 35%)
         border: 1px solid darken(lighten($yellow, 35%), 10%)
         border-radius: 3px

         td.icon
           div
             color: darken($yellow, 10%)

       &.caution
         background-color: lighten($red, 35%)
         border: 1px solid darken(lighten($red, 35%), 10%)
         border-radius: 3px

         td.icon
           div
             color: $red
</style>
