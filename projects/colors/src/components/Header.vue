<template lang="pug">
  nav.navbar.is-white(role="navigation", aria-label="main navigation")
     div.navbar-brand
       a.navbar-item(href="/")
         img(:src="`${publicPath}logo.white.png`", height=28)
       p  // {{title}}


</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
};
</script>

<style scoped lang="sass">
@import "~bulma/sass/utilities/initial-variables"
.navbar
  background-color: #F1CDBD

.navbar-item
  font-size: 0.90rem
  color: $grey-dark !important
  transition: 100ms all ease-in-out

  &:hover
    background-color: darken(#F1CDBD, 3%) !important

  img
    margin-right: 5px

p
  font-size: 1.3em
  margin-top: 11px
  margin-left: 5px
  color: $grey-dark

</style>
