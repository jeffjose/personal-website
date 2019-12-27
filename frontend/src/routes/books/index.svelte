<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`books.json`)
      .then(r => r.json())
      .then(books => {
        return { books };
      });
  }
</script>

<script>
  export let books;
</script>

<style>

</style>

<svelte:head>
  <title>Books - Jeffrey Jose</title>
</svelte:head>

<template lang="pug">
div.blog
  +each('books as book, index')
    | book
</template>
