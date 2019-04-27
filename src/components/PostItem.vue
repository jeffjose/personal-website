<template lang="pug">
  div.postitem
    div.wrapper(v-html="convert(adoc)")
</template>

<script>
const readingTime = require("reading-time");
const _ = require("lodash");

const asciidoctor = require("asciidoctor")();
const highlightJsExt = require("asciidoctor-highlight.js");
highlightJsExt.register(asciidoctor.Extensions);

class CustomConverter {
  constructor(adoc) {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    this.readingTime = readingTime(adoc).text;
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
      return this.baseConverter.convert(node, transform);
    }
  }
}

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
        attributes: [
          "icons=font",
          "experimental=true",
          "showtitle=true",
          "source-highlighter=highlightjs-ext"
        ]
      });
    }
  }
};
</script>

<style scoped lang="sass">

//@import "~@asciidoctor/core/dist/css/asciidoctor.css"
@import "~highlight.js/styles/tomorrow.css"



$font-size: 1.35rem

// ----------- night mode ----------------

$text-color: white
$accent-color: #FF0088
$inline-code-bg-color: #eff8ff
$box-bg-color: lighten($inline-code-bg-color, 1%)
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
$inline-code-bg-color: #eff8ff
$box-bg-color: lighten($inline-code-bg-color, 1%)
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
       margin: 2rem 0 0 0

     h3
       font-size: 2.0rem
       font-weight: 500
       letter-spacing: -1px
       margin: 1.5rem 0 0 0

     h4
       font-size: 1.9rem
       font-weight: 500
       letter-spacing: -1px
       margin: 2rem 0 0 0

     h5
       font-size: 1.5rem
       font-weight: 500
       letter-spacing: -1px
       margin: 2rem 0 0 0

     img
       width: 100%

     p
       font-size: $font-size
       margin-top: 0.9rem
       margin-bottom: 0.9rem

       em
         font-size: 1.45rem

         code
           font-style: normal
           font-family: "Fira Mono", monospace

     .fullbleed
       grid-column: 1 / -1
       border: none !important

     .imageblock

       .title
         text-align: center
         font-size: 1.1rem
         margin: 1rem 0

     .big
       grid-column: content

     li
       font-size: $font-size

     // For inline code
     p  code
       background-color: $inline-code-bg-color
       padding: 4px 10px
       font-size: 0.9rem
       //color: $accent-color
       font-family: "Fira Mono", monospace


     .listingblock
       padding: 0 1rem
       background-color: $box-bg-color
       margin: 0.5em 0

       .content
         padding: 0.8rem
         line-height: 1.6rem

       .title
         color: darken($box-bg-color, 30%)
         float: right
         margin-top: .5rem
         pointer-events: none

     a
       color: $accent-color
       text-decoration: none

       &:hover
        text-decoration: underline

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
       border: .5rem solid darken($accent-color, 5%)
       margin: 1rem 0
       box-sizing: border-box

       iframe
         position: absolute
         top: 0
         left: 0
         width: 100%
         height: 100%

     .subtitle
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

     // Copied from asciidoctor.css
     kbd
       font-family: "Fira Mono", monospace
       display: inline-block
       color: $text-color
       font-size: .65em
       line-height: 1.45
       background: #f7f7f7
       border: 1px solid #ccc
       -webkit-border-radius: 3px
       border-radius: 3px
       -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 0.1em white inset
       box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 0.1em #fff inset
       margin: 0 .15em
       padding: .2em .5em
       vertical-align: middle
       position: relative
       top: -.1em
       white-space: nowrap

     .keyseq kbd
       &:first-child
         margin-left: 0
       &:last-child
         margin-right: 0

     .menuseq, .menuref
       color: #000

     .menuseq b:not(.caret), .menuref, .button
       font-weight: normal
       background-color: lighten($gray-color, 50%)
       border: 1px solid lighten($gray-color, 40%)
       padding: 3px 5px
       border-radius: 3px
       font-family: "Fira Mono", monospace
       font-size: 0.65em

     .menuseq
       word-spacing: -.02em
       color: $text-color

       b.caret
         font-size: 2rem
         line-height: .8

       i.caret
         font-size: 1.5rem
         color: $text-color
         font-weight: bold
         text-align: center
         width: .45em

     .fa
         display: inline-block
         font: normal normal normal 14px/1 "Fira Sans"
         font-size: inherit

     .fa-angle-right:before
       content: "›"

     sup
       color: $accent-color
       margin-left: 5px

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


     // Copied from asciidoctor.css
     .conum[data-value]
       display: inline-block
       color: #fff !important
       background: rgba(0, 0, 0, 0.8)
       background: $accent-color
       background: darken($box-bg-color, 40%)
       border-radius: 100px
       text-align: center
       font-size: .75em
       width: 1.67em
       height: 1.67em
       line-height: 1.67em
       font-family: "Open Sans","DejaVu Sans",sans-serif
       font-style: normal
       font-weight: bold
       *
         color: #fff !important
       + b
         display: none
       &::after
         content: attr(data-value)

     pre .conum[data-value]
       position: relative
       top: -.125em

     b.conum *
       color: inherit !important

     .conum:not([data-value]):empty
       display: none


     ol > li p
       margin-bottom: .625em

     ul
       > li p, dd
         margin-bottom: .625em

     ol dd, .olist .olist
       margin-bottom: .625em

     .ulist
       .ulist, .olist
         margin-bottom: .625em

     .olist .ulist
       margin-bottom: .625em

     ul
       &.checklist, &.none
         list-style-type: none

     ol.none, ul.no-bullet
       list-style-type: none

     ol
       &.no-bullet, &.unnumbered
         list-style-type: none

     ul.unstyled, ol.unstyled
       list-style-type: none

     ul.no-bullet
       margin-left: .625em

     ol
       &.no-bullet, &.unnumbered
         margin-left: .625em

     ul.unstyled, ol.unstyled
       margin-left: 0

     ul
       &.checklist
         margin-left: .625em
         li > p:first-child >
           .fa-square-o:first-child, .fa-check-square-o:first-child
             width: 1.25em
             font-size: .8em
             position: relative
             bottom: .125em
           input[type="checkbox"]:first-child
             margin-right: .25em
       &.inline
         display: -ms-flexbox
         display: -webkit-box
         display: flex
         -ms-flex-flow: row wrap
         -webkit-flex-flow: row wrap
         flex-flow: row wrap
         list-style: none
         margin: 0 0 .625em -1.25em
         > li
           margin-left: 1.25em

     .unstyled dl dt
       font-weight: 400
       font-style: normal

     ol
       &.arabic
         list-style-type: decimal
       &.decimal
         list-style-type: decimal-leading-zero
       &.loweralpha
         list-style-type: lower-alpha
       &.upperalpha
         list-style-type: upper-alpha
       &.lowerroman
         list-style-type: lower-roman
       &.upperroman
         list-style-type: upper-roman
       &.lowergreek
         list-style-type: lower-greek

     .fa-square-o:before
       content: "☐"

     .fa-check-square-o:before
       content: "☑"
</style>
