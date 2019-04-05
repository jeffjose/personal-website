<template lang="pug">
  div.toolbar
    div.left
      img(src="android-chrome-192x192.png")
    div.middle
      p.name Jeffrey Jose
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="sass">

$text-color: rgba(0, 0, 0, .84)
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)

.toolbar
  height: 5rem
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 7fr [word-start] 720px [word-end] 7fr

  @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px


  .left
    grid-column-start: 1
    display: flex
    align-items: center

    img
      height: 2.2rem
      margin-left: 30px

  .middle
    grid-column-start: word-start
    display: flex
    justify-content: center

    p
      font-family: "Roboto", sans-serif
      margin: auto .5rem
      letter-spacing: 1px
      font-size: 1.5rem
      color: $text-color
</style>
