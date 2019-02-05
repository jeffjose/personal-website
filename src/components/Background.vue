<template lang="pug">

 div#background
    svg(@click="handleClick($event);")
      g#wrapper
         circle(v-for="point in points", r=20, :cx="point.x", :cy="point.y") {{point}}
</template>


<script lang="coffee">

export default {
  name: 'background'
  data: () ->

    data =
      points: [{x: 100, y: 100}, {x: 180, y:300}]

    return data

  methods:
    handleClick: (event) ->
      console.log(event)
      @addCircle(event.clientX, event.clientY)

    addCircle: (x, y) ->
      console.log(@points)
      @points.push({x: x, y: y})
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
