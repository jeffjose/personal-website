<template lang="pug">
  div
    section.hero.is-fullheight.welcome
      .hero-body
        .container
          h1.title Jeffrey Jose
          h2.subtitle Product Manager at Google
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style scoped lang="sass">

.welcome
  background: radial-gradient(circle at 10% 20%, rgb(223, 181, 251) 0%, rgb(251, 181, 246) 35.5%, rgb(251, 207, 181) 63.5%, rgb(250, 253, 197) 90%)

</style>
