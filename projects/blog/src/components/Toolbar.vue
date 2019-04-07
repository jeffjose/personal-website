<template lang="pug">
  div.toolbar
    div.middle
      p.name
       router-link(:to="{path: '/'}") Jeffrey Jose
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="sass">

@import url('https://fonts.googleapis.com/css?family=Lato')

$text-color: rgba(0, 0, 0, .84)
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$accent-color: #FF0088

.toolbar
  height: 4rem
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 7fr [word-start] 720px [word-end] 7fr

  @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px


  .middle
    grid-column-start: word-start
    display: flex
    align-content: center

    p
      font-family: "Lato", sans-serif
      font-size: 1.5rem
      text-transform: uppercase
      letter-spacing: 1px
      transition: 80ms all ease-in-out
      cursor: default
      margin: auto 0

      a
        text-decoration: none
        color: $text-color


        &:hover
          color: $accent-color
</style>
