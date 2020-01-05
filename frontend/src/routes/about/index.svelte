<svelte:head>
	<title>About - Jeffrey Jose</title>
</svelte:head>

<style lang="sass">

@import '../base'

.contents
  color: theme("text-color")
  display: grid
  grid-template-columns: 5fr [content-start] 2fr [word-start] 1080px [word-end] 2fr [content-end] 5fr
  flex: 1

  @media (max-width: 1080px)
    grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr

  @media (max-width: 800px)
    grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px

  .about
    display: grid
    grid-column: word

</style>

<template lang="pug">
div.contents
  div.about
    h1 Hi there!
    | This is the 'about' page. There's not much here.
</template>
