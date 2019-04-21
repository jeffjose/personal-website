<template lang="pug">
  div.post
    div.postitem
      PostItem(:adoc="postContent")


    h2 More posts
    div.postitemblock(v-for="post in getMorePosts()")
      PostItemBlock(:adoc="post[1]", :title="post[0]")

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

import PostItem from "@/components/PostItem.vue";
import PostItemBlock from "@/components/PostItemBlock.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "post",
  components: { PostItem, PostItemBlock },
  created() {
    // TODO: This wont work since there's no payload.url
    this.getPostContents({
      title: this.$route.params.title
    });
  },
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
      contents: "contents",
      content: "content",
      relatedContents: "relatedContents"
    }),
    postContent() {
      //return x;
      return this.content(this.$route.params.title);
    }
  },
  methods: {
    ...mapActions("posts", {
      getPosts: "getPosts",
      getPostContents: "getPostContents",
      getMorePosts: function() {
        return this.relatedContents(this.$route.params.title);
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
    grid-column: word

  .postitemblock:nth-child(even)
    grid-column: right

  .postitemblock:nth-child(odd)
    grid-column: left
</style>
