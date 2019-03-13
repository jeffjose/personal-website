<template lang="pug">
  div.wrapper
    p {{val}}
    span.color(:style="{backgroundColor: val}")
</template>

<script>
export default {
  name: "Color",
  props: {
    val: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="sass">
.color
  width: 4em
  height: 4em
  display: inline-block
</style>
