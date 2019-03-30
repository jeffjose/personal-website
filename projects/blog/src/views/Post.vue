<template lang="pug">
  div.post
    p content
    p {{postContent}}
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
      posts: "posts",
      contents: "contents"
    }),
    postContent() {
      console.log(this.contents);
      console.log(this.$route);
      return this.contents[this.$route.params.title];
    }
  },
  methods: {
    ...mapActions("posts", {
      getPosts: "getPosts",
      getPostContents: "getPostContents"
    })
  }
};
</script>
