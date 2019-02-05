<template lang="pug">

 div#background
    svg(@click="handleClick();")
      g#wrapper
         circle(cx=100, cy=100, r=20, style="opacity: 0.4")
         circle(cx=300, cy=150, r=20, style="opacity: 0.4")
</template>


<script lang="coffee">

export default {
  name: 'background'
  methods: {
    handleClick: () -> console.log(13)
    }
}


</script>

<style scoped lang="sass">

#background svg
  height: 100%;
  width: 100%;
  position: absolute;

circle
  fill: red;

</style>
