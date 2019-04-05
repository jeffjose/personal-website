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

$text-color: rgba(0, 0, 0, .84)
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)

.wrapper
  display: grid
  grid-template-columns: 1fr [main-start] repeat(6, 1.5fr) 1fr
  grid-template-rows: 2fr [title-start] 1fr [main-start] repeat(8, .25fr)
  height: 100vh
  pointer-events: none
  user-select: none
  align-items: center

.header
  grid-column: main-start / span 2
  grid-row: title-start
  padding: 1rem
  display: grid
  align-items: center

.title
  font-family: 'Roboto'
  font-weight: 400
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr
  align-items: center
  position: relative

  & .name
    font-size: 1.4rem
    color: $text-color

    letter-spacing: 1px
  & .desc
    font-size: 1rem
    color: $gray-color

.logo
  height: 4rem
  width: 4rem
  grid-row: title-start
  justify-self: end

.dark
  background-color: #333

  .name
    color: darken(white, 20%)

  .desc
    color: darken(white, 40%)
</style>
