<template>
    <div class="slider-wrapper">
        <div v-for="prop, i in props" class="slider" :style="{'background-color': colors(i)}">
            <div class="top">
                <div class="mode" :class="{bg: prop.mode != 'cdf'}" @click="prop.mode = 'pdf'">pdf</div>
                <div class="mode" :class="{bg: prop.mode == 'cdf'}" @click="prop.mode = 'cdf'">cdf</div>
                <div class="seperator">|</div>
                <div v-if="prop.discrete == null" class="toggle" :class="{bg: prop.area == true}" @click="prop.area = !prop.area">shade</div>
                <div v-if="prop.discrete != null" class="toggle" :class="{bg: prop.dots == true}" @click="prop.dots = !prop.dots">points</div>
                <i v-show='props.length > 1' @click="remove(i)" class="material-icons close">close</i>
            </div>
            <div class="all-sliders">
                <slider-base v-for="p in prop.p" v-model="p.data" :label="p.name" :min=p.min :max=p.max :step=p.step :bounded=p.bounded :readonly=p.readonly></slider-base>
            </div>
            <div class="bottom">
                <div class="stat">mean:   <div class="val">{{stats[i].mean | clean}}    </div></div>
                <div class="stat">median: <div class="val">{{stats[i].median | clean}}  </div></div>
                <div class="stat">mode:   <div class="val">{{stats[i].mode | clean}}    </div></div>
                <div class="stat">var:    <div class="val">{{stats[i].variance | clean}}</div></div>
            </div>
        </div>
        <div @click="add" class="add-another">
            <i class="material-icons add">add</i>
        </div>
    </div>
</template>

<script lang="coffee">

import SliderBase from  "@/components/SliderBase.vue"

import Utils from  "@/utils/Utils.vue"

export default {
  name: 'slider',
  mixins: [Utils]
  components: {SliderBase}
  props: ['props', 'stats']
  data: () ->
      modes: ['cdf', 'pdf'] # default is PDF
      mode: true # default is PDF (true), false = CDF
  filters:
      clean: (val) ->
            if _.isNaN(val)
                val = ''
            else if val is Infinity
                val = '∞'
            else if val is -Infinity
                val = '-∞'
            return val
  methods:
    round: (val) -> Math.round(100 * val) / 100
    add: () ->
        console.log('add')
        prop = _.cloneDeep(@props[0])

        # Create a random "data" attribute
        #  if the prop.step == 1, then its an integer
        #  else if prop.step != 1, then its a float
        for p in prop.p
            p.data = @round(_.random(p.min, p.max, p.step isnt 1))

        @props.push(prop)

    remove: (i) ->

        if @props.length is 1
            return
        else
            @props.splice(i, 1)


}
</script>

<style scoped lang="less">

@addAnotherBGColor: darken(#f6f9fc, 5%);

@textColorDark: #333333;
@textColorLight: #FFFFFF;

.slider-wrapper {

    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-bottom: 20px;
    transition: all ease-in-out 500ms;

    .slider {
        transition: all ease-in-out 500ms;
        margin: 1px;
        cursor: default;

        .top {
            height: 19px;
            display: flex;
            padding-bottom: 5px;
            padding-left: 2.5px;
            border-bottom: 1px solid fade(@textColorLight, 30%);

            .seperator{
                color: fade(@textColorLight, 80%);
            }

            .mode, .toggle {
                font-size: 10px;
                color: fade(@textColorLight, 80%);
                margin: 5px 2.5px 0px 2.5px;
                padding: 0px 3px;
                user-select: none;

                &.bg {
                    background-color: rgba(255, 255, 255, 0.2);
                }

                cursor: pointer;
            }
            .close {
                margin-left: auto;
                margin: 5px 5px 0px auto;
                font-size: 14px;
                color: fade(@textColorLight, 80%);
                cursor: pointer;

                &:hover {
                    color: @textColorLight;
                }
            }
        }


        .bottom {
            font-size: 10px;
            transition: all ease-in-out 80ms;
            margin: 0px;
            padding: 5px;
            border-top: 1px solid fade(@textColorLight, 30%);

            color: fade(@textColorLight, 80%);
            display: flex;
            flex-flow: row;

            .stat {
                display: inline-block;
                padding: 3px;
                user-select: none;
                &:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    color: white;
                }

                .val {
                    width: 24px;
                    color: white;
                    display: inline-block;
                }
            }
        }


    }

    .all-sliders {

        display: flex;
        flex-flow: column;
    }



    .add-another {
        transition: all ease-in-out 80ms;
        display: flex;
        margin: 1px;

        width: 254.67px; // from eye-balling in chrome
        background-color: @addAnotherBGColor;
        vertical-align: middle;
        cursor: pointer;

        color: darken(@addAnotherBGColor, 15%);
        line-height: 24px;

        flex-direction:  column;

        align-items: center;
        .add {
            font-size: 32px;
            margin: auto 0px;
        }

        &:hover {
            background-color: darken(@addAnotherBGColor, 3%);

            .add {
                color: darken(@addAnotherBGColor, 30%);

            }
        }
    }

}
</style>
