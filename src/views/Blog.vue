<template lang="pug">
  div.blog
    PostItemSmall(v-for="post, key in posts2" :adoc = "post.contents", :index="key", :title='post.name')
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
      posts2: "posts2"
    })
  }
};
</script>

<style scoped lang="sass"></style>
