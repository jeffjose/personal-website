<template>
    <div>
        <h1>{{ msg }}</h1>
        <svg width="500" height="270">
            <g style="transform: translate(0, 20px)">
                <path :d="line" stroke="red" stroke-width="2" fill='none'/>
            </g>
        </svg>
    </div>
</template>

<script lang="coffee">

d3 = require 'd3'

export default {
  name: 'vline',
  data: () ->
    msg: 'Hi!'
    data: [1, 10, 23, 30, 33, 20]
    line: ''
  mounted: () ->
      @calculatePath()
  methods:
    getScales: () ->

          x = d3.scaleLinear().range([0, 430])
          y = d3.scaleLinear().range([210, 0])
          d3.axisLeft().scale(x)
          d3.axisBottom().scale(y)

          x.domain(d3.extent(@data, (d, i) => i))
          y.domain([0, d3.max(@data, (d) => d)])

          { x, y }

    calculatePath: () ->
      scale = this.getScales()
      path = d3.line()
        .x((d, i) => scale.x(i))
        .y((d) => scale.y(d))

      @line = path(this.data)

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
