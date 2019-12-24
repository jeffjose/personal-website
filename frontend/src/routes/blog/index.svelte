<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import PostLink from "../../components/PostLink.svelte";
  export let posts;
</script>

<style>

</style>

<svelte:head>
  <title>Blog - Jeffrey Jose</title>
</svelte:head>

<template lang="pug">
div.blog
  +each('posts as post, index')
    PostLink(contents='{post.teaserhtml}', slug='{post.slug}', index='{index}')
</template>
