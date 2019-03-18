<template lang="pug">
  div(:class="{'dark': darkmode}")
    background
    div.wrapper
      img.logo(src="/homepage/android-chrome-192x192.png")
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
  },
  data: function() {
    return {
      darkmode: false
    };
  }
};
</script>

<style scoped lang="sass">
.wrapper
  display: grid
  grid-template-columns: 1fr 3fr 3fr 3fr 1fr
  grid-template-rows: 10px 50px 2fr 1fr 3fr
  height: 100vh
  pointer-events: none
  user-select: none

.header
  grid-column: 2/5
  grid-row: 4
  padding: 1rem

.title
  font-family: 'Roboto'
  font-weight: 400
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr
  align-items: center
  height: 8vh
  position: relative

  & .name
    font-size: 1.4rem
    color: lighten(rgb(51, 51, 51), 10%)
  & .desc
    font-size: 1rem
    color: lighten(rgb(51, 51, 51), 30%)

.logo
  height: 4rem
  width: 4rem
  grid-row: 4
  justify-self: end
  padding-top: .8rem

.dark
  background-color: #333

  .name
    color: darken(white, 20%)

  .desc
    color: darken(white, 40%)
</style>
