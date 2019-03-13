<template lang="pug">
  div.home
    Header(title="Colors")
    section.section
      Color(val="#000000")

</template>

<script>
import Header from "@/components/Header.vue";
import Color from "@/components/Color.vue";

export default {
  name: "home",
  created() {
    document.title = document.location.hostname;
  },
  components: {
    Header,
    Color
  }
};
</script>

<style scoped lang="sass"></style>
