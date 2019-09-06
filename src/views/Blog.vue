<template lang="pug">
  div.blog
    PostItemSmall(v-for="(post, key, index) in posts" :adoc = "post.contents", :index="index", :title='post.name')
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostItem from "@/components/PostItem.vue";
import PostItemSmall from "@/components/PostItemSmall.vue";

export default {
  name: "blog",
  components: { PostItem, PostItemSmall },
  computed: {
    ...mapGetters("posts", {
      posts: "posts"
    })
  }
};
</script>

<style scoped lang="sass"></style>
