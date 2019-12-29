<script context="module">
  if (process.browser) {
    async function preload(page, session) {
      return this.redirect(301, "https://drive.google.com/open?id=0B4f0-evKhKYHNnBZN0xZTXRSRnM", true);
    }
  }
</script>
