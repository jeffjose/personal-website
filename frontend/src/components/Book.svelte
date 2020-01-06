<script>

  export let contents
  export let slug

  let url = /^https?:\/\//.test(slug) ? slug : `/books/${slug}`

</script>

<style lang="scss">

@import "../routes/base";

.book {
  height: 100%;
  background-color: theme('bg-color');
}

.book a {
  height: 100%;
  text-decoration: none;
}

.wrapper {
  display: grid;
  grid-template-columns: [content-start word-start] 1fr [word-end content-end];
  grid-template-rows: [top-start] 1fr [top-end bottom-start] auto [bottom-end];
  color: theme('text-color');
  cursor: pointer;

  height: 100%;
}

@media (max-width: 800px) {
}

.wrapper:hover {
  color: theme('accent-color');
}

.wrapper:hover :global(img){
  transform: scale(1.05);
}

.wrapper :global(*) {
  grid-column: word;
  display: none;
}


.wrapper :global(img) {
  width: 100%;
}

.wrapper :global(h1) {
  display: unset;
}

.wrapper :global(h1 *) {
  display: unset;
}

.wrapper :global(h1) {
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0;

  text-align: center;
  font-family: Lato;
  line-height: 2rem;

  padding: 0.5rem 0
}

.wrapper :global(.imageblock.hero) {
  display: unset;
  grid-row: top;
  grid-column: word;
  overflow: hidden;
}

.wrapper :global(.imageblock.hero *) {
  display: unset;
}

.wrapper :global(.content) {
  display: block !important;
}

</style>


<div class="book">
  <a rel="prefetch" class="clickable" href="{url}">
    <div class="wrapper">
      {@html contents}
    </div>
  </a>
</div>
