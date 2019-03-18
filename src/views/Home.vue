<template lang="pug">
  div
    background
    div.wrapper
      div.header
        div.title
          span.name Jeffrey Jose
          span.desc Product Manager at Google
</template>

<script>
import Background from "@/components/Background.vue";
import Project from "@/components/Project.vue";

export default {
  name: "home",
  created() {
    document.title = document.location.hostname;
  },
  components: {
    Project,
    Background
  }
};
</script>

<style scoped lang="sass">
.wrapper
  display: grid
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr
  grid-template-rows: 50px 1fr 1fr 1fr 3fr
  height: 100vh

.header
  grid-column: 2/5
  grid-row: 4
  padding: 1em
  pointer-events: none
  user-select: none

.title
  font-family: 'Roboto'
  font-weight: 400
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr
  align-items: center
  height: 8vh
  position: relative

  &::after
    content: ""
    background-image: url(/android-chrome-192x192.png)
    background-size: contain
    //background-color: lighten(rgb(51, 51, 51), 10%)
    //border-left: 2em solid black;
    height: 4rem
    width: 4rem
    position: absolute
    top: -.2rem
    bottom: 100%
    left: -5rem

  & .name
    font-size: 1.4rem
    color: lighten(rgb(51, 51, 51), 10%)
  & .desc
    font-size: 1rem
    color: lighten(rgb(51, 51, 51), 30%)
</style>
