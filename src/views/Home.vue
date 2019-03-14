<template lang="pug">
  div
    background
    section.hero.is-fullheight.welcome
      .hero-body
        .container
          p.title Jeffrey Jose
          p.subtitle Product Manager at Google
          .columns
            Project(title="Interactive Statistical Distribution", url="/statsviz")
            Project(title="Subnet/IP Calculator", url="/ip-calculator")
            Project(title="Colors", url="/colors")
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

.container
  pointer-events: none
  user-select: none

.title
  @extend .title
  font-weight: 400
  color: darken(rgb(246, 249, 252), 65%)

.subtitle
  @extend .subtitle
  font-weight: 300
  color: darken(rgb(246, 249, 252), 65%)

.welcome
  //background: radial-gradient(circle at 10% 20%, rgb(223, 181, 251) 0%, rgb(251, 181, 246) 35.5%, rgb(251, 207, 181) 63.5%, rgb(250, 253, 197) 90%)
</style>
