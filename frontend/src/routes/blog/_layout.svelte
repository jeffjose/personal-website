<script>
  import Header from '../../components/Header.svelte';
  import Footer from '../../components/Footer.svelte';
</script>

<style lang="sass" global>
@import './_tomorrow.css'
</style>

<template lang="pug">
Header

slot

Footer
</template>
