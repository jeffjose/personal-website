<template lang="pug">
  div.wrapper.columns.is-mobile
    .column.color(v-for="color, index in colors" :class="{'first': index == 0, 'last': index + 1 == colors.length}" :style="{backgroundColor: color.hex(), borderColor: color.darken(0.3)}")
      p.text(:style="{color: textColor(color)}") {{color.hex()}}
</template>

<script>
var isString = require("lodash/isString");
var map = require("lodash/map");

var chroma = require("chroma-js");
var xolor = require("xolor");

export default {
  name: "Color",
  props: ["value"],
  methods: {
    parseColor: function(string) {
      return chroma(xolor(string).hex);
    },
    textColor: function(color) {
      if (color.get("lab.l") < 70) {
        return chroma("white");
      } else {
        return chroma("black");
      }
    }
  },
  computed: {
    colors: function() {
      if (isString(this.value)) {
        return [this.parseColor(this.value)];
      } else {
        return map(this.value, this.parseColor);
      }
    }
  },
  beforeCreate: function() {
    this.chroma = chroma;
  }
};
</script>
<style scoped lang="sass">

$radius: 4px

.color
  height: 6em
  margin-top: 1em
  border-style: solid
  border-width: 0px
  border-top-width: 1px
  border-bottom-width: 1px


  &:nth-child(1)
    border-top-left-radius: $radius
    border-bottom-left-radius: $radius


  &:nth-last-child(1)
    border-top-right-radius: $radius
    border-bottom-right-radius: $radius

  &.first
    border-left-width: 1px

  &.last
    border-right-width: 1px

  & .text
      transition: all 80ms ease-in-out
      font-size: 0.8em
      margin-top: -10px
      opacity: 0

  &:hover .text
    opacity: 0.6
    margin-top: 0px
</style>
