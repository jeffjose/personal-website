<template lang="pug">
.wrapper(:class='{noPointerEvents: readonly}', @wheel.prevent='wheel($event.wheelDelta)')
  .left
    span.label
      p {{label}}
    input.slider(type='range', v-bind:value.number='value', v-on:input='update($event.target.value)', :min='cmin', :max='cmax', :step='step')
  .right
    span.buttons
      input.plus(type='button', value='+', @click.prevent='increment')
      input.minus(type='button', value='-', @click.prevent='decrement')
    span.text
      input.value(v-bind:value.number='value', @wheel='wheel($event.wheelDelta)', v-on:input='update($event.target.value)', :min='cmin', :max='cmax', :step='step')

</template>

<script lang="coffee">

d3 = require('d3')
_  = require('lodash')

import Utils from  "@/utils/Utils.vue"

export default {
    name: 'slider-base',
    props: ['label', 'value', 'max', 'min', 'step', 'bounded', 'readonly']
    mixins: ['Utils']
    data: () ->
        above_cmax: false
        old_cmax: @max
        old_cmin: @min
        below_cmin: false
    computed:
        cmax: () ->
            if not @bounded

                if @above_cmax

                    if @old_cmax < @value
                        x = @value
                    else
                        x = @old_cmax
                else
                    if @value > @max
                        x= @value
                        @above_cmax = true
                    else
                        # If it has gone above cmax, dont change cmax
                        if @above_cmax
                            x = @old_cmax
                        else
                            x= _.max([@max, @value])

            else
                x= _.max([@max, @value])

            @old_cmax = _.max([@old_cmax, x])
            return x

        cmin: () ->
            if not @bounded
                if @below_cmin

                    if @old_cmin > @value
                        x = @value
                    else
                        x = @old_cmin
                else
                    if @value < @min
                        x =  @value
                        @below_cmin = true
                    else
                        if @below_cmin
                            x = @old_cmin
                        else
                            x = _.min([@min, @value])
            else
                x = _.min([@min, @value])

            @old_cmin = _.min([@old_cmin, x])
            return x
    methods:
        round: (val) -> Math.round(100 * val) / 100
        update: (value) ->

            _number = Number(value)

            if _.isNaN(_number)
                number = 0
            else
                number = _number

            if @bounded
                if number > @cmax
                    number = _.min([@cmax, number])
                else if number < @cmin
                    number = _.max([@cmin, number])

            @$emit('input', number)

        increment: () ->
            newValue = @round(Number(@value) + Number(@step))

            @update(newValue)

        decrement: () ->
            newValue = @round(Number(@value) - Number(@step))

            @update(newValue)

        wheel: (direction) ->

            if direction > 0
                @increment()
            if direction < 0
                @decrement()

}
</script>

<style scoped lang="less">
@textColorDark: #333333;
@textColorLight: #ffffff;

.wrapper {
  height: 20px;
  width: 200px;
  margin: 3px;
  padding: 5px 0px;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all ease-in-out 80ms;

  align-self: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.left {
  float: left;
  height: 20px;
  margin-right: 10px;
  margin-left: 5px;

  .label {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    color: fade(@textColorLight, 80%);
    float: left;
    font-size: 12px;
    padding: 0px 5px;
    width: 40px;
    user-select: none;

    p {
      float: right;
      margin: 0px;

      margin-top: 1px;
    }
  }
  .slider {
    height: 20px;
    margin: 0px;

    width: 70px;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }
}

.right {
  .text {
    input {
      float: left;
      border: none;
      padding: 0px;
      color: @textColorLight;
      background-color: rgba(0, 0, 0, 0);
      width: 50px;
      height: 20px;

      font-size: 14px;
      line-height: 0px;
      vertical-align: middle;
      text-align: center;

      margin: 0px 2px;

      &:hover {
        color: @textColorLight;
        border-bottom: 1px solid @textColorLight;
      }

      &:focus {
        outline: none;
      }

      &::selection {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 10px;
      }
    }
  }

  .buttons {
    float: left;
    input {
      width: 10px;
      height: 10px;
      line-height: 0px;
      border: none;
      padding: 0px;
      display: block;
      font-size: 10px;

      color: @textColorDark;

      &:hover {
        background-color: darken(white, 20%);
      }

      &:focus {
        outline: none;
      }
    }

    .minus {
    }

    .plus {
    }
  }
}

.noPointerEvents {
  pointer-events: none;
  cursor: pointer;

  background: repeating-linear-gradient(
    45deg,
    rgba(200, 200, 200, 0.6),
    rgba(200, 200, 200, 0.6) 10px,
    rgba(200, 200, 200, 0.1) 10px,
    rgba(200, 200, 200, 0.1) 20px
  );
}
</style>
