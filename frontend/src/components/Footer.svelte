<script>
  import {onMount} from 'svelte';

  let revision = {'display': ''}

  onMount(async () => {

    const res = await fetch('/meta.json')
    revision = await res.json()
  })
</script>

<style lang="sass">

// TODO: This isnt a good location for base. Considering moving it outside of routes/
@import "../routes/base"

.footer
  min-height: 12rem
  background-color: theme('footer-bg-color')
  margin-top: 3rem
  border-top: 3px solid theme('footer-border-color')


  display: grid
  grid-template-columns: 7fr [word-start] 540px [word-end] 7fr

  justify-items: center
  align-items: center

  @media (max-width: 580px)
      grid-template-columns: 20px [content-start] 0fr [word-start] auto [word-end] 0fr [content-end] 20px
      min-height: 22rem

      a.link, p
        display: block !important
        margin: 1rem !important

      .dot
        display: none !important

      .meta
        grid-column: word !important
        justify-self: center !important
        align-self: center !important
        margin: 0 !important
        margin-bottom: 1rem !important

        a.pi
          text-align: center !important


  .contents
    grid-column: word
    text-align: center
    font-family: "Lato", sans-serif

    p
      display: inline-block

    a
      display: inline-block
      margin: 0.5rem 5px
      text-decoration: none
      color: theme('footer-text-color')

      &:hover
        color: theme('accent-color')

    .dot
      color: theme('footer-text-color')

    .name
      margin: 0.5rem

      a
        font-size: 1.2rem
        text-transform: uppercase
        letter-spacing: 1px
        margin: 0.5rem

  .meta
    justify-self: end
    align-self: end
    margin: 1rem

    &.dirty .pi
      color: theme('accent-color')

    &:hover .pi
      display: none

    &:hover .revision
      display: block

    .pi
      text-decoration: none
      margin: 0
      color: theme('footer-text-color')

    .revision
      text-decoration: none
      display: none
      color: theme('footer-text-color')

</style>

<template lang="pug">
  div.footer
    .contents
      .links
        a.link(href='/about') about
        p.dot ·
        a.link(href='/blog') blog
        p.dot ·
        a.link(href='/books') books
        p.dot ·
        a.link(href='/twitter') twitter
        p.dot ·
        a.link(href='/linkedin') linkedin
        p.dot ·
        a.link(href='/github') github
      p.name
        a.link(href='/') Jeffrey Jose
    .meta(class:dirty="{revision.dirty === true}", title="foobar")
      a.pi(rel="prefetch", href="/meta.json") π
      a.revision(title="{revision.revision}", href="https://github.com/jeffjose/personal-website") {revision.display}
</template>

