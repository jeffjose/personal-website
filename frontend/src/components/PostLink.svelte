<script>

  export let contents
  export let slug
  export let index

  $: className = `item-${index}`

</script>

<style lang="scss">

// $font-size: 1.35rem
//
// // ----------- night mode ----------------
//
// $text-color: white
// $accent-color: #FF0088
// $box-bg-color: #f6f9fc
// $blockquote-color: lighten($text-color, 10%)
// $gray-color: lighten($blockquote-color, 35%)
// $bg-color: black
//
//
// $blue: #4285f4
// $yellow: #fbbc04
// $red: #ea4335
// $green: #34a853
//
//
// // ----------- light mode ----------------
//
// $text-color: rgba(0, 0, 0, .84)
// $accent-color: #FF0088
// $box-bg-color: #f6f9fc
// $blockquote-color: lighten($text-color, 10%)
// $gray-color: lighten($blockquote-color, 13%)
// $bg-color: white
//
//
// $blue: #4285f4
// $yellow: #fbbc04
// $red: #ea4335
// $green: #34a853
//
//
// .postlink
//
//    background-color: $bg-color
//    margin: 2rem 0
//
//    a
//      text-decoration: none
//
// .wrapper
//   display: grid
//   grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr
//   grid-template-rows: [top-start] auto [top-end middle-start] auto [middle-end bottom-start] auto [bottom-end]
//
//   color: $text-color
//   cursor: pointer
//
//
//   @media (max-width: 800px)
//     grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px
//
//   &:hover
//     color: $accent-color
//     h1
//       border-bottom: 3px solid $accent-color
//
//   *
//     grid-column: word
//     display: none
//
//   img
//     width: 100%
//
//   h1, .date
//     display: unset
//     *
//      display: unset
//
//
//   // styles
//   .imageblock.hero
//      grid-row: top
//      grid-column: word
//
//   .date
//      grid-row: middle
//      color: $gray-color
//      font-size: 1.2rem
//
//   h1
//      grid-row: bottom
//      margin: 0
//
//      font-weight: 500
//      letter-spacing: -1px
//      line-height: 3.5rem
//      border-bottom: 3px solid rgba(0, 0, 0, 0)
//
//
//     // &.item-0
//     //   .imageblock.hero
//     //
//     //      display: unset
//     //
//     //      grid-row: top
//     //      grid-column: word
//     //
//     //      *
//     //        display: unset
//     //
//     //   .date
//     //      grid-row: middle
//     //      color: $gray-color
//     //      font-size: 1.2rem
//
//
//     //   h1
//     //      grid-row: bottom
//     //      margin: 0
//


// Auto-generated from https://www.sassmeister.com/. Change Options > Compiler > libsass
// .. and added :global()
//

.postlink {
  background-color: white;
  margin: 2rem 0;
}

.postlink a {
  text-decoration: none;
}

.wrapper {
  display: grid;
  grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr;
  grid-template-rows: [top-start] auto [top-end middle-start] auto [middle-end bottom-start] auto [bottom-end];
  color: rgba(0, 0, 0, 0.84);
  cursor: pointer;
}

@media (max-width: 800px) {
  .wrapper {
    grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px;
  }
}

.wrapper:hover {
  color: #FF0088;
}

.wrapper:hover :global(h1) {
  border-bottom: 3px solid #FF0088;
}

.wrapper :global(*) {
  grid-column: word;
  display: none;
}

.wrapper :global(img) {
  width: 100%;
}

.wrapper :global(h1), .wrapper :global(.date) {
  display: unset;
}

.wrapper :global(h1 *), .wrapper :global(.date *) {
  display: unset;
}

.wrapper :global(.imageblock.hero) {
  grid-row: top;
  grid-column: word;
}

.wrapper :global(.date) {
  grid-row: middle;
  color: rgba(59, 59, 59, 0.84);
  font-size: 1.2rem
}

.wrapper :global(h1) {
  grid-row: bottom;
  margin: 0;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 3.5rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0)
}

//.wrapper.item-0 :global(.imageblock.hero) {
//  display: unset;
//  grid-row: top;
//  grid-column: word;
//}
//
//.wrapper.item-0 :global(.imageblock.hero *) {
//  display: unset;
//}
//
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


<div class="postlink">
  <a rel="prefetch" class="clickable" href="/blog/{slug}">
    <div class="wrapper {className}">
      {@html contents}
    </div>
  </a>
</div>
