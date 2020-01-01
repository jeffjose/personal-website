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

  import { fade } from 'svelte/transition';

  import Book from "../../components/Book.svelte";
  export let books;

  let readingBooks = books.filter(book => book.reading == true)
  let reviewedBooks = books.filter(book => book.reviewed == true)
</script>

<style lang="sass">

$text-color: rgba(0, 0, 0, .84)
$accent-color: #FF0088
$inline-code-bg-color: #eff8ff
$box-bg-color: lighten($inline-code-bg-color, 1%)
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 13%)
$bg-color: white


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853

.contents
  display: grid
  grid-template-columns: 5fr [content-start] 2fr [word-start] 1080px [word-end] 2fr [content-end] 5fr
  flex: 1

  @media (max-width: 1100px)
    grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr

  @media (max-width: 800px)
    grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px

  .books
    display: grid
    grid-column: word
    grid-template-columns: repeat(5, 1fr)
    grid-row-gap: 30px
    grid-column-gap: 15px

    @media (max-width: 800px)
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr))

    .box
      padding: 0px 0px 3px 0px
      border: 2px solid rgba(0, 0, 0, 0)

      &:hover
        border-color: $accent-color


    p.tag
      grid-column-start: 1
      color: $text-color
      font-size: 1.5rem
      margin: 3rem 0 0 0

    .tag + .read, .tag + .reading
      grid-column-start: 1


</style>

<svelte:head>
  <title>Books - Jeffrey Jose</title>
</svelte:head>

<template lang="pug">
div.contents(in:fade='{{duration: 300}}', out:fade='{{duration:0}}')
  div.books
    +if('readingBooks && readingBooks.length > 0')
      p.tag Currently reading
      +each('readingBooks as book')
        .reading.box
          Book(contents='{book.teaserhtml}', slug='{book.goodreads}')

    +if('reviewedBooks && reviewedBooks.length > 0')
      p.tag Reviewed
      +each('reviewedBooks as book')
        .read.box
          Book(contents='{book.teaserhtml}', slug='{book.slug}')

    p.tag All books
    +each('books as book')
      .read.box
        Book(contents='{book.teaserhtml}', slug='{book.goodreads}')
</template>
