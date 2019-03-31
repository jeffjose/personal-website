<template lang="pug">
  div.post
    h1 content
    p {{postContent}}
    h2 OTHER POSTS
    div(v-for="post in posts")
      router-link(:to="{path: post.name}") {{post.name}}
    router-link(:to="{path: 'non-exist'}") non-exist
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
