<script>
  import Header from '../../components/Header.svelte';
  import Footer from '../../components/Footer.svelte';
</script>

<style>
/* Copied from highlight.js/styles/tomorrow.css */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */

/* Tomorrow Comment */
:global(.hljs-comment),
:global(.hljs-quote) {
  color: #8e908c;
}

/* Tomorrow Red */
:global(.hljs-variable),
:global(.hljs-template-variable),
:global(.hljs-tag),
:global(.hljs-name),
:global(.hljs-selector-id),
:global(.hljs-selector-class),
:global(.hljs-regexp),
:global(.hljs-deletion) {
  color: #c82829;
}

/* Tomorrow Orange */
:global(.hljs-number),
:global(.hljs-built_in),
:global(.hljs-builtin-name),
:global(.hljs-literal),
:global(.hljs-type),
:global(.hljs-params),
:global(.hljs-meta),
:global(.hljs-link) {
  color: #f5871f;
}

/* Tomorrow Yellow */
:global(.hljs-attribute) {
  color: #eab700;
}

/* Tomorrow Green */
:global(.hljs-string),
:global(.hljs-symbol),
:global(.hljs-bullet),
:global(.hljs-addition) {
  color: #718c00;
}

/* Tomorrow Blue */
:global(.hljs-title),
:global(.hljs-section) {
  color: #4271ae;
}

/* Tomorrow Purple */
:global(.hljs-keyword),
:global(.hljs-selector-tag) {
  color: #8959a8;
}

:global(.hljs) {
  display: block;
  overflow-x: auto;
  background: white;
  color: #4d4d4c;
  padding: 0.5em;
}

:global(.hljs-emphasis) {
  font-style: italic;
}

:global(.hljs-strong) {
  font-weight: bold;
}

</style>

<template lang="pug">
Header

slot

Footer
</template>
