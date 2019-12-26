<script>
  import Header from '../../components/Header.svelte';
  import Footer from '../../components/Footer.svelte';

</script>

<style>
  .contents {
    flex: 1;
  }
</style>

<template lang="pug">
Header

<div class="contents">
  slot
</div>

Footer
</template>
