<template lang="pug">
  div
    background
    div.wrapper
      img.logo(src="/android-chrome-192x192.png")
      div.header
        div.title
          span.name Jeffrey Jose
          span.desc Product Manager at Google
          div.links
            //router-link.link(:to="{path: '/blog'}") Blog
            a.link(href="https://twitter.com/jeffjose") Twitter
            a.link(href="https://www.linkedin.com/in/jeffreyjose/") Linkedin
</template>

<script>
import Background from "@/components/Background.vue";

export default {
  name: "home",
  created() {
    document.title = document.location.hostname;
  },
  components: {
    Background
  }
};
</script>

<style scoped lang="sass">


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

.wrapper
  display: grid
  grid-template-columns: 1fr [logo-start] 2fr [logo-end main-start] 9fr [main-end] 1fr
  grid-template-rows: 2fr [logo-start main-start] 1fr [logo-end main-end] 2fr
  height: 100vh
  pointer-events: none
  user-select: none
  align-items: center

  @media (max-width: 500px)
    grid-template-columns: 1fr [logo-start main-start] 9fr [logo-end main-end] 1fr
    grid-template-rows: 20px [logo-start] 1fr [logo-end main-start] 1fr [main-end] 6fr

    .logo
      justify-self: center

    .header
      justify-self: center
      padding: 0
      margin: 0

      .title
        justify-items: center
        align-items: center

.header
  grid-column: main
  grid-row: main
  padding-left: 1rem
  margin-top: 5px
  display: grid
  align-items: center

.title
  font-family: 'Lato', sans-serif
  font-weight: 400
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr
  align-items: center
  position: relative

  & .name
    font-size: 1.4rem
    color: $text-color
    letter-spacing: 1px
    text-transform: uppercase

  & .desc
    font-size: 1rem
    color: $gray-color

.logo
  height: 4rem
  width: 4rem
  grid-row: logo
  grid-column: logo
  justify-self: end

.links
  margin-top: .3rem
  a
    display: inline-block
    pointer-events: all
    text-decoration: none
    color: $text-color
    margin-right: .4rem

    &:hover
      color: $accent-color
</style>
