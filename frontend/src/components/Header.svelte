<script>
</script>


<style lang="sass">

// TODO: This isnt a good location for base. Considering moving it outside of routes/
@import "../routes/base"

.header
  height: 4rem
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.07)

  @media (prefers-color-scheme: dark)
    box-shadow: none

  display: grid
  grid-template-columns: 7fr [word-start] 1080px [word-end] 7fr

  @media (max-width: 1100px)
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
        color: theme('text-color')


        &:hover
          color: theme('accent-color')

    p.link
      margin: auto 0rem

      a
        font-family: "Lato", sans-serif
        color: theme('text-color')
        text-decoration: none
        margin: auto 0.5rem

        &:hover
          color: theme('accent-color')

</style>

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
      a(rel="prefetch", href="https://twitter.com/jeffjose") twitter
    p.link
      a(rel="prefetch", href="https://linkedin.com/in/jeffreyjose") linkedin
    p.link
      a(rel="prefetch", href="https://github.com/jeffjose") github
</template>
