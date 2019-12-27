<script>
  import Header from '../../components/Header.svelte';
  import Footer from '../../components/Footer.svelte';
</script>

<style lang="sass">
  .contents
    display: grid
    grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr
    flex: 1

    @media (max-width: 800px)
      grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px
</style>

<template lang="pug">
Header

<div class="contents">
  slot
</div>

Footer
</template>
