<script>

  export let contents
  export let slug
  export let index

  $: className = `item-${index}`

</script>

<style lang="scss">

.book {
  background-color: white;
  margin: 2rem 0;
}

.book a {
  text-decoration: none;
}

.wrapper {
  display: grid;
  grid-template-columns: [content-start] [word-start] 1fr [word-end] [content-end];
  grid-template-rows: [top-start] auto [top-end middle-start] auto [middle-end bottom-start] auto [bottom-end];
  color: rgba(0, 0, 0, 0.84);
  cursor: pointer;
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
}

.wrapper :global(.imageblock.hero) {
  display: unset;
  grid-row: top;
  grid-column: word;
}

.wrapper :global(.imageblock.hero *) {
  display: unset;
}

//.wrapper.item-0 :global(.date) {
//  grid-row: middle;
//  color: rgba(59, 59, 59, 0.84);
//  font-size: 1.2rem
//}
//
//.wrapper.item-0 :global(h1) {
//  grid-row: bottom;
//  margin: 0;
//}


</style>


<div class="book">
  <a rel="prefetch" class="clickable" href="/books/{slug}">
    <div class="wrapper {className}">
      {@html contents}
    </div>
  </a>
</div>
