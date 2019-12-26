<template lang="pug">
  div.header
    div.middle
      p.name
        a(href="/") Jeffrey Jose
      p.link
        a(rel="prefetch", href="/about") about
      p.link
        a(rel="prefetch", href="/blog") blog
      p.link
        a(rel="prefetch", href="/books") books
      p.link
        a(rel="prefetch", href="/twitter") twitter
      p.link
        a(rel="prefetch", href="/linkedin") linkedin
</template>

<style lang="sass">

$text-color: rgba(0, 0, 0, .84)
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$accent-color: #FF0088

.header
  height: 4rem
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

  display: grid
  grid-template-columns: 7fr [word-start] 720px [word-end] 7fr

  @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px

      .middle
        //flex-direction: column

        p.link
          display: none

  .middle
    grid-column-start: word-start
    display: flex
    align-content: center

    p.name
      font-family: "Lato", sans-serif
      font-size: 1.5rem
      text-transform: uppercase
      letter-spacing: 1px
      cursor: default
      margin: auto 0
      margin-right: 1rem

      a
        text-decoration: none
        color: $text-color


        &:hover
          color: $accent-color

    p.link
      margin: auto 0rem

      a
        font-family: "Lato", sans-serif
        color: $text-color
        text-decoration: none
        margin: auto 0.5rem

        &:hover
          color: $accent-color
</style>
