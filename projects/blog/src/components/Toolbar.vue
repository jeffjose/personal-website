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
  grid-template-columns: 1fr [content-start] minmax(auto, 15rem) [word-start] 43rem [word-end] minmax(auto, 15rem) [content-end] 1fr

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
