<template lang="pug">
  div.blog
    //div(v-for="post in posts")
    //  router-link(:to="{path: post.name}") {{post.name}} {{post.time}}
    //router-link(:to="{path: 'non-exist'}") non-exist
    PostItemSmall(v-for="post, key in posts" :adoc = "contents[post.name]", :index="key", :title='post.name')
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostItem from "@/components/PostItem.vue";
import PostItemSmall from "@/components/PostItemSmall.vue";

export default {
  name: "home",
  components: { PostItem, PostItemSmall },
  computed: {
    ...mapGetters("posts", {
      posts: "posts",
      contents: "contents"
    })
  }
};
</script>

<style scoped lang="sass"></style>
