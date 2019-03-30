<template lang="pug">
  div.post
    p content
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "post",
  created() {
    this.getPostContents(this.$route.params.title);
  },
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    })
  },
  methods: {
    ...mapActions("posts", {
      getPosts: "getPosts",
      getPostContents: "getPostContents"
    })
  }
};
</script>
