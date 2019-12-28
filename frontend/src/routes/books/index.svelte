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

  .contents
    display: grid
    grid-template-columns: 5fr [content-start] 2fr [word-start] 1080px [word-end] 2fr [content-end] 5fr
    flex: 1

    @media (max-width: 1080px)
      grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr

    @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px

    .books
      display: grid
      grid-column: word
      grid-template-columns: repeat(5, 1fr)
      grid-column-gap: 15px

      @media (max-width: 800px)
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr))

</style>

<svelte:head>
  <title>Books - Jeffrey Jose</title>
</svelte:head>

<template lang="pug">
div.contents
  div.books
    +each('books as book, index')
      Book(contents='{book.teaserhtml}', slug='{book.slug}', index='{index}')
</template>
