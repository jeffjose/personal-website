<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>

  .contents {
    flex: 1;
  }
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<template lang="pug">
Header

.contents
  center
    h1 {status}
    | {error.message}

    +if('dev && error.stack')
      pre {error.stack}

Footer
</template>

