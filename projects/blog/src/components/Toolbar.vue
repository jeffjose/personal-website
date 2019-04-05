<template lang="pug">
  div.toolbar
    div
      p.name Jeffrey Jose
    div
      p.links Home
      p.links Blog
      p.links Projects
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="sass">

@import url('https://fonts.googleapis.com/css?family=Bitter')


.toolbar
  height: 9rem
  #box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 2fr [content-start] 5fr [word-start] 720px [word-end] 5fr [content-end] 2fr
  grid-template-rows: 3fr 1fr

  @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px


  div
    grid-column-start: word-start
    display: flex
    justify-content: center

    p
      font-family: "Bitter", sans-serif
      color: #4d4d4d
      font-size: 1.2rem
      margin: auto .5rem

      text-transform: uppercase

      &.name
        font-size: 1.5rem

</style>
