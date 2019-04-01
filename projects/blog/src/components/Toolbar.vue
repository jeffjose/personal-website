<template lang="pug">
  div.toolbar
    div.logo
    p Jeffrey Jose
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="sass">

@import url('https://fonts.googleapis.com/css?family=Roboto')

.toolbar
  height: 3rem
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 1fr [content-start] minmax(auto, 15rem) [word-start] 43rem [word-end] minmax(auto, 15rem) [content-end] 1fr


  p
    grid-column: word

    padding: 0
    margin: 0
    align-self: center
    font-size: 1.34rem

</style>
