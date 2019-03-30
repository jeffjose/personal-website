<template lang="pug">
  #app
    toolbar
    router-view
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  name: "app",
  components: { Toolbar }
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Roboto|Spectral")

html
  background-color: white
  color: #333

body
  font-family: Spectral, serif
  margin: 0
</style>
