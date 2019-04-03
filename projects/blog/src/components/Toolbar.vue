<template lang="pug">
  div.toolbar
    div.brand
      img.logo(src="/android-chrome-192x192.png")
      p Jeffrey Jose
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="sass">


.toolbar
  height: 3rem
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr

  @media (max-width: 800px)
      grid-template-columns: 10px [content-start] 0fr [word-start] max-content [word-end] 0fr [content-end] 10px


  .brand
    grid-column: word

    align-self: center

    display: flex
    justify-items: center
    align-items: center

    img
      height: 30px
      margin-right: 1rem

    p
      font-family: "Roboto", sans-serif
      color: #4d4d4d

      padding: 0
      margin: .3rem 0 0 0
      font-size: 1.1rem
</style>
