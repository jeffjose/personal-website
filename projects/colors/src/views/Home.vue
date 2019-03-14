<template lang="pug">
  div.home
    Header(title="Colors")
    .container
      .columns
        .column.is-half.is-offset-one-quarter
            Color(value="rgb(51, 51, 51)")
            Color(value="rgb(246, 249, 252)")
            Color(value="#00d1b2")
            Color(:value=['#000000', '#AAAAAA'])
            Type(value="Hello world", font="Roboto")
            Type(value="Nice to meet you", font="Open Sans")
            Type(value="hi hi hi hi hi Nice to meet you", font="Open Sans")

</template>

<script>
import Header from "@/components/Header.vue";

import Color from "@/components/Color.vue";
import Type from "@/components/Type.vue";

export default {
  name: "home",
  created() {
    document.title = document.location.hostname;
  },
  components: {
    Header,
    Color,
    Type
  }
};
</script>

<style scoped lang="sass"></style>
