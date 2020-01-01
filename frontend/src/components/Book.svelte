<script>

  export let contents
  export let slug

  let url = /^https?:\/\//.test(slug) ? slug : `/books/${slug}`

</script>

<style lang="scss">

.book {
  height: 100%;
  background-color: white;
}

.book a {
  height: 100%;
  text-decoration: none;
}

.wrapper {
  display: grid;
  grid-template-columns: [content-start word-start] 1fr [word-end content-end];
  grid-template-rows: [top-start] 1fr [top-end bottom-start] auto [bottom-end];
  color: rgba(0, 0, 0, 0.84);
  cursor: pointer;

  height: 100%;
}

@media (max-width: 800px) {
}

.wrapper:hover {
  color: #FF0088;
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
  font-size: 1rem;
  margin: 0;
  padding: 0 5px;
}

.wrapper :global(.imageblock.hero) {
  display: unset;
  grid-row: top;
  grid-column: word;
}

.wrapper :global(.imageblock.hero *) {
  display: unset;
}



</style>


<div class="book">
  <a rel="prefetch" class="clickable" href="{url}">
    <div class="wrapper">
      {@html contents}
    </div>
  </a>
</div>
