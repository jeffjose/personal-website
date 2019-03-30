<template lang="pug">
  div.blog
    p foo
    p {{postList}}
    p bar
    post
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Post from "@/components/Post";

export default {
  name: "home",
  components: { Post },
  created() {
    this.getPostList();
  },
  computed: {
    ...mapGetters("posts", {
      postList: "postList"
    })
  },
  methods: {
    ...mapActions("posts", {
      getPostList: "getPostList"
    })
  }
};
</script>

<style scoped lang="sass"></style>
