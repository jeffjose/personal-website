<template lang="pug">
  div.post
    //h1 content
    //div(v-html="asciidoctor(postContent)")
    //h2 OTHER POSTS
    //div(v-for="post in posts")
    //  router-link(:to="{path: post.name}") {{post.name}}
    //router-link(:to="{path: 'non-exist'}") non-exist
    //div {{readingTime(postContent)}}
    div.wrapper(v-html="convert(postContent)")
</template>

<script>
const x = `

= Lorem ipsum super fluid

[.subtitle]
And why you thought this was going to be a fruitless excercise for no good reason

[.date]
Apr 1, 2019

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

image::https://unsplash.it/1920/1080?random[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.

_Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin ++vim foo.py++ four loko vaporware skateboard cray brunch._

Lorem *ipsum dolor* amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch. Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh http://powerman.name/doc/asciidoc[AsciiDoc Cheat Sheet this one is long hey!^] man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. The command +main.py+ can typically be used right before. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

first term:: definition of first term

And this other one

first term:: definition of first term
second term:: definition of second term

[nicer#id2.class1.class2]
Main header
===========

[.big]
.How easy it is
image::https://cdn-images-1.medium.com/max/1200/1*-fCK_LIT4kM5eSqgxJtqLw.gif[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

Second heading
--------------

[.fullbleed]
image::https://unsplash.it/1920/1080?random[]

.python
[source, python]
----
def add(x, y):
  return x + y

if __main__ == "__main__":
  add(1, 2)
----

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[.big]
image::https://cdn-images-1.medium.com/max/1200/1*ZYlHavkT1ChU4es53D_R7A.png[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[qanda]
What is Asciidoctor?::
  An implementation of the AsciiDoc processor in Ruby.
What is the answer to the Ultimate Question?:: 42

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

.bash
[source, bash]
----
mkdir -p /tmp/foobar

curl https://google.com | grep script
----

.ruby
[source,ruby]
----
require 'sinatra' // <1>

get '/hi' do // <2>
  "Hello World!" // <3>
end
----
<1> Library import
<2> URL mapping
<3> HTTP response body

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[.big]
image::https://cdn-images-1.medium.com/max/800/1*p9qJOs0j5cU4Qfx0Z5vzUA.png[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

video::JyECrGp-Sw8[youtube]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

[.big]
video::JyECrGp-Sw8[youtube]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

[.fullbleed]
video::JyECrGp-Sw8[youtube]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

How about this?

.Description of the image
[.big]
image::https://cdn-images-1.medium.com/max/800/1*p9qJOs0j5cU4Qfx0Z5vzUA.png[xxyy]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[quote, Albert Einstein]
A person who never made a mistake never tried anything new and then some

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[quote]
A person who never made a mistake never tried anything new and then some

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[quote, 'https://www.linkedin.com/in/karmel[Karmel Allison]', TF Engineering Leader at Google]
We don’t think you should have to choose between a simple API and scalable API. We want a higher level API that takes you all the way from MNIST to planet scale.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland.

[quote]
TF 2.0 is a beginner's paradise

Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.


[source,xml]
----
<section>
  <title>Section Title</title> <!--1-->
</section>
----
<1> The section title is required.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

Final thoughts
~~~~~~~~~~~~~~


Lorem ipsum dolor amet #skateboard# pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

NOTE: An admonition paragraph draws the reader's attention to
auxiliary information.
Its purpose is determined by the label
at the beginning of the paragraph.

Here are the other built-in admonition types:

TIP: Pro tip...

here comes important section

IMPORTANT: Don't forget...

Always remember

WARNING: Watch out for...

And this too

CAUTION: Ensure that...

==== Final thoughts
This section should be the ending. Hope you had fun reading this
We covered

. this first item
. this second item that is long
. third item

The following checklist might be useful

* [*] checked
* [x] also checked
* [ ] not checked
*     normal list item

===== Final thoughts
This section should be the ending. Hope you had fun reading this

* level 1
** level 2
*** level 3
**** level 4
***** level 5
* level 1

`;

import { mapGetters, mapActions } from "vuex";

const readingTime = require("reading-time");

const _ = require("lodash");

const asciidoctor = require("asciidoctor")();
//const highlightJsExt = require("asciidoctor-highlight.js");

class CustomConverter {
  constructor() {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    this.readingTime = readingTime;
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
      node.lines = [`${node.lines[0]} · ${this.readingTime(x).text}`];

      return this.baseConverter.convert(node, transform);
    } else {
      //console.log(node.getNodeName());
      return this.baseConverter.convert(node, transform);
    }
  }
}

//const registry = asciidoctor.Extensions.create()
//highlightJsExt.register(registry)
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
    readingTime: function(str) {
      return readingTime(x);
    },
    convert: function(str) {
      return asciidoctor.convert(x, {
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
$gray-color: lighten(#5f6368, 10%)
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
$gray-color: lighten(#5f6368, 10%)
$gray-color: lighten($blockquote-color, 35%)
$bg-color: white


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853


.post

   background-color: $bg-color

   &::v-deep .wrapper
     margin-top: 3rem
     display: grid
     grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr

     color: $text-color

     @media (max-width: 800px)
       grid-template-columns: 10px [content-start] 2fr [word-start] auto [word-end] 2fr [content-end] 10px


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
