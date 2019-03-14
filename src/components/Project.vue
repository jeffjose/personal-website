<template lang="pug">
.column.wrapper
  p.toptext {{title}}
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    url: String,
    desc: String
  }
};
</script>

<style scoped lang="sass">
.wrapper
  height: 100px
  background-color: darken(rgb(246, 249, 252), 1%)
  border-color: darken(rgb(246, 249, 252), 3%)
  border-width: 1px
  border-style: solid
  margin: 10px
  border-radius: 4px
  color: darken(rgb(246, 249, 252), 35%)
  pointer-events: all

  & p
    transition: all 80ms ease-in-out
    margin-top: -10px
    opacity: 0

  &:hover p
    margin-top: 0px
    opacity: 1
</style>
