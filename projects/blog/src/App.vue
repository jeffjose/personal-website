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
@import url('https://fonts.googleapis.com/css?family=Spectral:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800')

html
  background-color: white
  color: #333

body
  font-family: Spectral, serif
  margin: 0
</style>
