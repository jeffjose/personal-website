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
  import Book from "../../components/Book.svelte";
  export let books;
</script>

<style lang="sass">

.blog
  display: grid
  grid-column: word
  grid-template-columns: repeat(5, 1fr)
  grid-column-gap: 15px

  @media (max-width: 800px)
    grid-template-columns: repeat(3, minmax(130px, 1fr))

</style>

<svelte:head>
  <title>Books - Jeffrey Jose</title>
</svelte:head>

<template lang="pug">
div.blog
  +each('books as book, index')
    Book(contents='{book.teaserhtml}', slug='{book.slug}', index='{index}')
</template>
