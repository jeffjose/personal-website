<script>
	import Background from '../components/Background.svelte';
</script>

<style lang="sass">

$text-color: white
$accent-color: #FF0088
$box-bg-color: #f6f9fc
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 13%)
$bg-color: black


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853

$text-color: rgba(0, 0, 0, .84)
$accent-color: #FF0088
$box-bg-color: #f6f9fc
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 13%)
$bg-color: white


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853

.wrapper
  display: grid
  grid-template-columns: 1fr [logo-start] 2fr [logo-end main-start] 9fr [main-end] 1fr
  grid-template-rows: 2fr [logo-start main-start] 1fr [logo-end main-end] 2fr
  height: 100vh
  pointer-events: none
  user-select: none
  align-items: center

  @media (max-width: 500px)
    grid-template-columns: 1fr [logo-start main-start] 9fr [logo-end main-end] 1fr
    grid-template-rows: 60px [logo-start] 2fr [logo-end main-start] 2fr [main-end] 6fr
    grid-gap: 20px


    .logo
      justify-self: center
      align-self: end

    .header
      align-self: start
      justify-self: center
      padding: 0
      margin: 0

      .title
        justify-items: center
        align-items: center
        text-align: center
        grid-gap: 11px
        grid-template-rows: 1fr 1.2fr 7fr

        .desc
          align-self: start

        .links
          grid-auto-flow: row
          align-self: start
          grid-row-gap: 15px

          .link
            margin: 0

.header
  grid-column: main
  grid-row: main
  padding-left: 1rem
  margin-top: 5px
  display: grid
  align-items: center

.title
  font-family: 'Lato', sans-serif
  font-weight: 400
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr 1fr
  align-items: center
  position: relative

  & .name
    font-size: 1.4rem
    color: $text-color
    letter-spacing: 1px
    text-transform: uppercase

  & .desc
    font-size: 1rem
    color: $gray-color

.logo
  height: 4rem
  width: 4rem
  grid-row: logo
  grid-column: logo
  justify-self: end

.links
  height: 1.5rem

  display: grid
  grid-auto-flow: column
  grid-auto-columns: max-content
  align-items: center

  a
    display: inline-block
    pointer-events: all
    text-decoration: none
    color: $text-color
    margin-right: .6rem

    &:hover
      color: $accent-color
</style>

<svelte:head>
  <title>Jeffrey Jose</title>
</svelte:head>

<template lang="pug">
  div.wrapper
    img.logo(src="/logo-192.png", alt="logo")
    div.header
      div.title
        span.name Jeffrey Jose
        span.desc Product Manager at Google
        div.links
          a.link(rel="prefetch" href="/about") about
          a.link(rel="prefetch" href="/blog") blog
          a.link(rel="prefetch" href="/books") books
          a.link(href="https://twitter.com/jeffjose") twitter
          a.link(href="https://linkedin.com/in/jeffreyjose") linkedin
          a.link(href="https://github.com/jeffjose") github
          //a.link(href="/twitter") twitter
          //a.link(href="/linkedin") linkedin
          //a.link(href="/github") github
          //a.link(rel="prefetch" href="/meta.json") commit
</template>
