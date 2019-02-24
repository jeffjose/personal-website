<template lang="pug">
  div
    background
    section.hero.is-fullheight.welcome
      .hero-body
        .container
          p.title Jeffrey Jose
          p.subtitle Product Manager at Google
</template>

<script>
  import Header from '@/components/Header.vue'
  import Background from '@/components/Background.vue'
  
  export default {
    name: 'home',
    components: {
      Header,
      Background,
    }
  }
</script>

<style scoped lang="sass">

.container
  pointer-events: none
  user-select: none

.title
  @extend .title
  font-weight: 400

.subtitle
  @extend .subtitle
  font-weight: 300

.welcome
  //background: radial-gradient(circle at 10% 20%, rgb(223, 181, 251) 0%, rgb(251, 181, 246) 35.5%, rgb(251, 207, 181) 63.5%, rgb(250, 253, 197) 90%)

</style>
