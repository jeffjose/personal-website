<template lang="pug">
  div.blog
    p 404
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FourOFour",
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    })
  }
};
</script>

<style scoped lang="sass"></style>
