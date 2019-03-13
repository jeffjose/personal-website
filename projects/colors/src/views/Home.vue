<template lang="pug">
  div.home
    Header(title="Colors")
    section.section
      h1 foo
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "home",
  created() {
    document.title = document.location.hostname;
  },
  components: {
    Header,
  }
};
</script>

<style scoped lang="sass">

</style>
