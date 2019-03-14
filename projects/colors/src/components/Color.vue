<template lang="pug">
  div.wrapper.columns.is-mobile
    .column.color(v-for="color in colors" :style="{backgroundColor: color}")
</template>

<script>
var isString = require("lodash/isString");

export default {
  name: "Color",
  props: ["value"],
  computed: {
    colors: function() {
      if (isString(this.value)) {
        return [this.value];
      } else {
        return this.value;
      }
    }
  }
};
</script>
<style scoped lang="sass">

$radius: 4px

.color
  height: 6em
  margin-top: 1em

  &:nth-child(1)
    border-top-left-radius: $radius
    border-bottom-left-radius: $radius

  &:nth-last-child(1)
    border-top-right-radius: $radius
    border-bottom-right-radius: $radius

</style>
