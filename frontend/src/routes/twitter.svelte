<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  onMount(() => goto("https://twitter.com/jeffjose"));
  //export async function preload(page, session) {
  //  return this.redirect(302, "https://twitter.com/jeffjose");
  //}
</script>
