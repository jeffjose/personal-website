<template lang="pug">
  div.home
    Header(title="IP Calculator")
    section.section
       subnet
</template>

<script>
import Header from "@/components/Header.vue";
import Subnet from "@/components/Subnet.vue";

export default {
  name: "home",
  created() {
    document.title = document.location.hostname;
  },
  components: {
    Header,
    Subnet
  }
};
</script>

<style scoped lang="sass">

</style>
