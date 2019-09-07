<template lang="pug">
  div.postitemblock
    router-link(:to="{path: goto}")
      div.wrapper(v-html="convert(adoc)")
</template>

<script>
const readingTime = require("reading-time");

const asciidoctor = require("asciidoctor")();

class CustomConverter {
  constructor(adoc) {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    this.readingTime = readingTime(adoc).text;
  }
  convert(node, transform) {
    let nodeName = node.getNodeName();

    // For PostItemSmall we dont need to render the whole post
    if (
      nodeName == "admonition" ||
      nodeName == "section" ||
      nodeName == "inline_quoted" ||
      nodeName == "dlist" ||
      nodeName == "listing" ||
      nodeName == "table" ||
      nodeName == "colist" ||
      nodeName == "inline_anchor"
    ) {
      return "";
    }

    // Only `date` needs to be rendered
    if (nodeName == "paragraph" && node.attributes.$$smap.role != "date") {
      return "";
    }

    if (nodeName === "preamble" || nodeName === "open") {
      return node.getContent();
    } else if (
      nodeName == "paragraph" &&
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
  name: "PostItemBlock",
  created() {
    asciidoctor.ConverterFactory.register(new CustomConverter(this.adoc), [
      "html5"
    ]);
  },
  computed: {
    goto() {
      return "/blog/" + this.title.replace(/\.adoc/, "");
    }
  },
  props: ["adoc", "title"],
  methods: {
    convert: function(str) {
      return asciidoctor.convert(str, {
        doctype: "book",
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

$random-color-1: rgb(random(255),random(255),random(255))
$random-color-2: rgb(random(255),random(255),random(255))

.postitemblock

   cursor: pointer
   margin: 0.5rem 0
   border-radius: 0.2rem
   box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

   background: linear-gradient(45deg, $random-color-1, $random-color-2)

   a
     text-decoration: none

   &::v-deep .wrapper
     display: grid
     grid-template-columns: [content-start] auto [content-end]
     grid-template-rows: [top-start] minmax(119px, auto) [top-end bottom-start] auto [bottom-end]

     color: $text-color
     cursor: pointer

     &:hover
       color: $accent-color

     *
       display: none

     img
       width: 100%
       object-fit: cover
       height: 7rem

     h1, .imageblock, .date
       display: unset
       *
        display: unset


     // styles
     .imageblock.hero
        grid-row: top
        grid-column: content

     h1, .imageblock
       background-color: white
       justify-self: center
       align-self: center

     h1
        grid-column: content
        grid-row: bottom
        margin: 1rem

        font-weight: 500
        font-size: 1.3rem
        padding: 2.2rem 0 0.5rem 0
        margin: 0
        width: 100%
        text-align: center

     .date
        grid-column: content
        grid-row: bottom
        color: $gray-color
        margin: 0
        padding: 0.7rem 0
        width: 100%
        text-align: center
        font-size: 0.9rem
</style>
