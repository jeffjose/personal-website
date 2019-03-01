<template lang="pug">

 div#background
    svg(
      @mousedown.left="start($event.clientX, $event.clientY)",
      @mouseup="stop", 
      @touchstart="start($event.touches[0].clientX, $event.touches[0].clientY)", 
      @touchend="stop", 
      @touchcancel="stop")
      g#wrapper
         g#test(v-for="point, index in points" :key="index")
           circle(:r="point.r", :cx="point.x", :cy="point.y", :fill="allColors[(index%allColors.length)]")
</template>


<script lang="coffee">

_ = require 'lodash'
{TweenLite, TweenMax} = require 'gsap'
chroma = require 'chroma-js'

export default {
  name: 'background'
  data: () ->

    data =

      interval: false
      clickDuration: 0

      lastCircle: {}

      duration: 5
      points: []
      defaultColors: [
        '#f44336'
        '#E91E63'
        '#9C27B0'
        '#673AB7'
        '#3F51B5'
        '#2196F3'
        '#03A9F4'
        '#00BCD4'
        '#009688'
        '#4CAF50'
        '#8BC34A'
        '#CDDC39'
        '#FFEB3B'
        '#FFC107'
        '#FF9800'
        '#FF5722'
      ]

    return data

  created: () -> 
    window.addEventListener('keyup', @key)
    @allColors = @defaultColors

  methods:

    key: (event) -> 
      if event.code is not 'Space'
        return

      #r1 = chroma.random()
      #r2 = chroma.random()
      #@allColors = chroma.scale([r1, r2]).mode('lab').colors(5)
      

    start:(x, y) -> 

      if not @interval
        @clickDuration = 0
        @addCircle(x, y)
        @interval = setInterval(() => 
                                @clickDuration = @clickDuration + 1
                                @lastCircle.r = @clickDuration
          , 10)
      else
        @updateCircle()

    animate: () ->
      TweenMax.staggerTo(@points, @duration, cycle: {
        x: (index, target) => @wiggle(target.x),
        r: (index, target) => @random(8, 40)
        }, onComplete: @animate)

    stop:() -> 

      clearInterval(@interval)
      @interval = false
      @animate()


    wiggle: (val) -> 
      v = parseInt(val)

      max = Math.max(0, v-3)
      min = Math.min(100, v+3)

      r = @random(max, min)

      return "#{r}%"

    random: (min, max) -> 
      return Math.floor(Math.random()*(parseInt(max)-parseInt(min)+1)+parseInt(min))
    
    addCircle: (x, y) ->
      @lastCircle = {x:"#{x*100/window.innerWidth}%", y:y, id: Date.now(), r: 0}
      @points.push(@lastCircle)

      @points.ease = Quad.EaseInOut

}

</script>

<style scoped lang="sass">

#background svg
  height: 100%;
  width: 100%;
  position: absolute;

circle
  opacity: 0.5

</style>
