<script context="module">
  if (process.browser) {
    async function preload(page, session) {
    return this.redirect(302, "https://www.linkedin.com/in/jeffreyjose/", true);
    }
  }
</script>
