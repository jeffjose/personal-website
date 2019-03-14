<template lang="pug">
  div.wrapper.columns.is-mobile
    .column
      span.type(:style="{fontFamily: font}") {{value}}
</template>

<script>
var WebFont = require("webfontloader");

export default {
  name: "Type",
  props: ["value", "font"],
  created: function() {
    WebFont.load({
      google: {
        families: [this.font]
      }
    });
  }
};
</script>

<style scoped lang="sass">

.column
  height: 6em

.type
  font-size: 4vh
  text-align: center
</style>
