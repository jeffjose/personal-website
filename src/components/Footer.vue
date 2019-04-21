<template lang="pug">
  div.footer
    .contents
      .links
        router-link(:to="{path: '/'}") Home
        p.dot ·
        router-link(:to="{path: '/blog'}") Blog
        p.dot ·
        a.link(href="https://twitter.com/jeffjose") Twitter
        p.dot ·
        a.link(href="https://www.linkedin.com/in/jeffreyjose/") Linkedin
      p.name Jeffrey Jose
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="sass">

@import url('https://fonts.googleapis.com/css?family=Lato')

$text-color: rgba(0, 0, 0, .84)
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$accent-color: #FF0088

.footer
  height: 12rem
  background-color: lighten($accent-color, 45%)
  margin-top: 3rem
  border-top: 1px solid $accent-color

  display: grid
  grid-template-columns: 7fr [word-start] 720px [word-end] 7fr

  @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px

      a, p
        display: block !important
        margin: 1rem !important

      .dot
        display: none !important

  justify-items: center
  align-items: center

  .contents
    grid-column: 1/-1
    text-align: center
    font-family: "Lato", sans-serif

    p
      display: inline-block

    a
      display: inline-block
      margin: 0.5rem 5px
      text-decoration: none
      color: $text-color

      &:hover
        color: $accent-color

    .dot
      color: $gray-color

    .name
      font-size: 1.2rem
      text-transform: uppercase
      letter-spacing: 1px
      margin: 0.5rem
</style>
