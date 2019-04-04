<template lang="pug">
  div.toolbar
    p Jeffrey Jose
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="sass">


.toolbar
  height: 4rem
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 2fr [content-start] 5fr [word-start] 720px [word-end] 5fr [content-end] 2fr

  @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px


  .brand
    grid-column: word

    align-self: center

    display: flex
    justify-items: center
    align-items: center

  p
    grid-column-start: word-start
    font-family: "Spectral", sans-serif
    color: #4d4d4d

    margin: auto

    padding-top: 7px
    font-size: 1.8rem
    text-transform: uppercase
</style>
