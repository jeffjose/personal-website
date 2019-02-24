<template lang="pug">

 div#background
    svg(@mousedown="start($event)" @mouseup="stop")
      g#wrapper
         g#test(v-for="point, index in points" :key="index")
           circle(:r="point.r", :cx="point.x", :cy="point.y", :fill="allColors[(index%allColors.length)]")
</template>


<script lang="coffee">

_ = require 'lodash'
{TweenLite, TweenMax} = require 'gsap'

export default {
  name: 'background'
  data: () ->

    data =
      startTime: 0
      stopTime: 0

      interval: false
      clickDuration: 0

      lastCircle: {}

      duration: 5
      points: []
      allColors: [
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

  methods:

    start:(event) -> 
      @startTime = Date.now()

      if not @interval
        @clickDuration = 0
        @addCircle(event.clientX, event.clientY)
        @interval = setInterval(() => 
                                @clickDuration = @clickDuration + 1
                                @lastCircle.r = @clickDuration
          , 10)
      else
        @updateCircle()

    animate: () ->
      TweenMax.staggerTo(@points, @duration, cycle: {r: (target, index) => @random(8, 40)}, onComplete: @animate)

    stop:() -> 
      @stopTime = Date.now()

      clearInterval(@interval)
      @interval = false
      @animate()


    random: (min, max) -> Math.floor(Math.random() * max) + min
    
    handleClick: (event) ->
      @addCircle(event.clientX, event.clientY)

    addCircle: (x, y) ->
      @lastCircle = {x:x, y:y, id: Date.now(), r: 0}
      @points.push(@lastCircle)

      @points.ease = Quad.EaseIn

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
