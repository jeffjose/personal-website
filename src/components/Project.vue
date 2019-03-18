<template lang="pug">
.column.wrapper(@click="goto")
    p.toptext {{title}}
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    url: String
  },
  methods: {
    goto: function() {
      this.$router.push(this.url);
    }
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
  cursor: pointer

  & p.toptext
    font-size: 1em
    transition: all 80ms ease-in-out

  &:hover p.toptext
</style>
