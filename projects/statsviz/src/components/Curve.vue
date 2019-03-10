<template lang="pug">
div
  svg(:height='height', :width='width')
    g.wrapper
      path.line(v-for='line, i in lines', :stroke='colors(i)', :d='line')
      path.area(v-for='area, i in areas', :fill='colors(i)', :class='uuid[i]', :d='area')

</template>

<script lang="coffee">

d3       = require('d3')
_        = require('lodash')

import Utils from  "@/utils/Utils.vue"

INFINITY = 100
YMAX = 4

export default {

  name: 'curve',
  mixins: [Utils]
  props: {
    title: String
    height: String
    width: String,
    values: Array,
    discrete: Boolean,
    points:
        default: [false]
    shaded:
        default: [false]
    }
  data: () ->
    lines: ''
    areas: ''
    data: @massage(@values)
    margin:
        top: 30
        right: 30
        bottom: 30
        left: 40

  watch:
      values: (values) ->
          @data = @massage(@values)

          @redraw()

      shaded: (x) ->
          @redraw()

      points: (x) ->
          @redraw()

  mounted: () ->

      @svg   = d3.select(@$el).select('svg')
      @curve = @svg.select('g.wrapper')

      @draw()

  methods:

    massage: (values) ->

        for value, i in values
            value.map (x) ->

               if (x is Infinity) or (x is -Infinity)
                   return INFINITY
               else if _.isNaN(x)
                   return 0
               else
                   return _.max([x, 0])


    draw: () ->
      @setupSVG()
      @scale = @setupScales()

      @resetScales()

      @drawGraph()

      @drawAxis()

    redraw: (axis=false) ->
      if axis
          @drawAxis()

      @drawGraph()

    setupSVG: () ->
        @dims =
            width: @svg.attr('width') - @margin.left - @margin.right
            height: @svg.attr('height') - @margin.top - @margin.bottom

        @svg
          .on 'wheel', (e) =>
              d3.event.stopPropagation()
              d3.event.preventDefault()
              @zoomScales(x=d3.event.wheelDeltaY * -1, y=d3.event.wheelDeltaY * -1)
              @redraw(true)
        @curve
          .attr('transform', "translate(#{@margin.left}, #{@margin.top})")

    setupScales: () ->

        # Use the first item to setup x axis
        sampleData = @data[0]

        x = d3.scaleLinear().range([0, @dims.width])
        x.domain(d3.extent(sampleData, (d, i) => d))

        y = d3.scaleLinear().range([@dims.height, 0])

        # Hardcoding YMAX
        #y.domain([0, YMAX])
        y.domain([0, d3.min([YMAX, d3.max(sampleData, (d) => d)])])
        #y.domain([0, d3.max(sampleData, (d) => d)])

        { x, y }

    zoomScales: (x=0, y=0) ->

        xTick = @scale.x.ticks()[1] - @scale.x.ticks()[0]
        xMax  = @scale.x.domain()[1]

        yTick = @scale.y.ticks()[1] - @scale.y.ticks()[0]
        yMax  = @scale.y.domain()[1]


        if y > 0
            @scale.y.domain([0, yMax + yTick])
        else if y < 0
            @scale.y.domain([0, yMax - yTick])

        if x > 0
            @scale.x.domain([0, xMax + xTick])
        else if x < 0
            @scale.x.domain([0, xMax - xTick])

    resetScales: () ->

        # Show 100 points
        @scale.x.domain([0, 100])

        sampleData = @data[0]
        @scale.y.domain([0, d3.min([YMAX, d3.max(sampleData, (d) => d)])])

    drawAxis: () ->

        @curve.selectAll('.axis').remove()

        @curve.append('g')
            .attr('transform', "translate(0, #{@dims.height})")
            .attr('class', 'axis xaxis')
            .call(d3.axisBottom(@scale.x))
            .on 'wheel', (e) =>
                d3.event.stopPropagation()
                d3.event.preventDefault()
                @zoomScales(x=d3.event.wheelDeltaY * -1, y=0)
                @redraw(true)

        @curve.append('g')
            .attr('class', 'axis yaxis')
            .call(d3.axisLeft(@scale.y).ticks(5))
            .on 'wheel', (e) =>
                d3.event.stopPropagation()
                d3.event.preventDefault()
                @zoomScales(x=0, y=d3.event.wheelDeltaY * -1)
                @redraw(true)


    drawGraph: () ->


        if @discrete
            @curve.selectAll(".bars-wrapper").remove()
            for data, i in @data
                @drawBars(data, i)
        else
            @drawPath(@data)

        for shaded, i in @shaded

            @drawArea(@data)

        if @discrete
            # There might or might not be points/dots, but remove them
            # anyway
            @curve.selectAll(".points-wrapper").remove()

        for data, i in @data

            if @points[i]
                @drawPoints(data, i)

    drawBars: (data, i) ->
        uuid = @uuid[i]

        @curve.selectAll(".bars-wrapper.#{uuid}").remove()
        barWrapper = @curve.append("g")
            .attr('class', "bars-wrapper #{uuid}")

        rects = barWrapper.selectAll('rect')
            .data(data, (d, i) -> d)
            .enter().append('rect')
                .attr('class', "bars #{uuid}")
                .style('fill', @colors(i))
                #.attr('width', @scale.x.bandwidth())
                .attr('width', 2)
                .attr('x', (d, i) => @scale.x(i))
                .attr('y', (d, i) => @scale.y(d))
                .attr('height', (d, i) => @dims.height - @scale.y(d))

    drawPoints: (data, i) ->

        uuid = @uuid[i]

        @curve.selectAll(".points-wrapper.#{uuid}").remove()

        pointsWrapper = @curve.append("g")
            .attr('class', "points-wrapper #{uuid}")

        circles = pointsWrapper.selectAll('circle')
            .data(data, (d, i) -> d)
            .enter().append('circle')
                .attr('class', 'points')
                .style('fill', @colors(i))
                .attr('r', 5)
                .attr('cx', (d, i) => @scale.x(i))
                .attr('cy', (d, i) => @scale.y(d))

    drawPath: (datas) ->
        path = d3.line()
            #.x((d, i) => @scale.x(i/datas[0].length))
            .x((d, i) => @scale.x(i))
            .y((d) => @scale.y(d))

        @lines = (path(data) for data in datas)

    drawArea: (datas) ->

        @areas = []

        area = d3.area()
            #.x((d, i) => @scale.x(i/datas[0].length))
            .x((d, i) => @scale.x(i))
            .y0(@dims.height)
            .y1((d) => @scale.y(d))

        for data, i in datas

            if @shaded[i]
                @areas.push(area(data))
            else
                @areas[i] = ''


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

@axisColor: #9E9E9E;
//@lineColor: #E91E63;
@lineColor: #FF7043;

path.line {
    stroke-width: 2;
    fill: none;
}

path.area {
    stroke: none;
    opacity: 0.2;
}

rect.bars {
    opacity: 1;
}

g.axis {
    transition: all ease-in-out 80ms;

    &.xaxis {
        cursor: col-resize;
    }
    &.yaxis {
        cursor: row-resize;
    }
    &:hover {
        path, line {
            stroke: darken(@axisColor, 20%);
        }

        text {
            fill: darken(@axisColor, 20%);
        }
    }

    path, line {
        stroke: @axisColor;


    }

    text {
        fill: @axisColor;
    }

    &.yaxis .tick * , &.xaxis .tick * {
        stroke: none;
    }
}

.transparent {
    stroke-opacity: 0.2;
}

circle.points {
    fill: @lineColor;
    //fill-opacity: 0.6;
}
</style>
