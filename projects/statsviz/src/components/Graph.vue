<template lang="pug">
.graph.panel
  h1.title {{ title }}
  slider(:stats='stats', :props='props')
  curve(:values='values', :width='width', :height='height', :title='title', :discrete='discrete', :points='points', :shaded='shaded')

</template>

<script lang="coffee">

_ = require('lodash')

import Utils from  "@/utils/Utils.vue"

import Slider from  "@/components/Slider.vue"
import Curve from  "@/components/Curve.vue"

export default {
    name: 'graph'
    mixins: ['Utils']
    props: ['title', 'props', 'dist', 'samples', 'width', 'height']
    components: {Slider, Curve}
    methods:
        getSamples: () -> _.range(@samples[0], @samples[1], @samples[2])
        round: (val) -> Math.round(100 * val) / 100
    computed:
        shaded: () -> (p.area for p in @props)
        points: () -> (p.dots for p in @props)
        discrete: () -> @props[0].discrete # technically this is an attribute of the distribution, but implemented as part of the prop
        values: () ->

            samples = @getSamples()

            for params in @props

                if params.sync
                    params.sync(params)

            # Check the first props to see whether this is a 1 param, 2 param or 3 param distribution
            if @props[0].p.length is 1
                values = (_.get(@dist, params.mode, _.noop)(x, params.p[0].data) for x in samples for params in @props)
            else if @props[0].p.length is 2
                values = (_.get(@dist, params.mode, _.noop)(x, params.p[0].data, params.p[1].data) for x in samples for params in @props)
            else if @props[0].p.length is 3
                values = (_.get(@dist, params.mode, _.noop)(x, params.p[0].data, params.p[1].data, params.p[2].data) for x in samples for params in @props)

            return values

        stats: () ->

            # Check the first props to see whether this is a 1 param, 2 param or 3 param distribution
            if @props[0].p.length is 1

                stats = ({
                        mean:     @round(@dist.mean?(params.p[0].data))
                        median:   @round(@dist.median?(params.p[0].data))
                        mode:     @round(@dist.mode?(params.p[0].data))
                        variance: @round(@dist.variance?(params.p[0].data))
                } for params in @props)

            else if @props[0].p.length is 2
                stats = ({
                        mean:     @round(@dist.mean?(params.p[0].data, params.p[1].data))
                        median:   @round(@dist.median?(params.p[0].data, params.p[1].data))
                        mode:     @round(@dist.mode?(params.p[0].data, params.p[1].data))
                        variance: @round(@dist.variance?(params.p[0].data, params.p[1].data))
                } for params in @props)
            else if @props[0].p.length is 3
                stats = ({
                        mean:     @round(@dist.mean?(params.p[0].data, params.p[1].data, params.p[2].data))
                        median:   @round(@dist.median?(params.p[0].data, params.p[1].data, params.p[2].data))
                        mode:     @round(@dist.mode?(params.p[0].data, params.p[1].data, params.p[2].data))
                        variance: @round(@dist.variance?(params.p[0].data, params.p[1].data, params.p[2].data))
                } for params in @props)

            return stats

}
</script>

<style lang="less">
@BGColor: white;
.panel {
  padding: 10px;
  background-color: @BGColor;
  &:hover {
    background-color: #f6f9fc;
  }

  h1.title {
    font-family: "Comfortaa", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>
