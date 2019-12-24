<script>

  export let contents
  export let slug
  export let index

</script>

<style lang="sass">

$font-size: 1.35rem

// ----------- night mode ----------------

$text-color: white
$accent-color: #FF0088
$box-bg-color: #f6f9fc
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$bg-color: black


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853


// ----------- light mode ----------------

$text-color: rgba(0, 0, 0, .84)
$accent-color: #FF0088
$box-bg-color: #f6f9fc
$blockquote-color: lighten($text-color, 10%)
$gray-color: lighten($blockquote-color, 35%)
$bg-color: white


$blue: #4285f4
$yellow: #fbbc04
$red: #ea4335
$green: #34a853


.postlink

   background-color: $bg-color
   margin: 2rem 0

   a
     text-decoration: none

   &::v-deep .wrapper
     display: grid
     grid-template-columns: 5fr [content-start] 2fr [word-start] 720px [word-end] 2fr [content-end] 5fr
     grid-template-rows: [top-start] auto [top-end middle-start] auto [middle-end bottom-start] auto [bottom-end]

     color: $text-color
     cursor: pointer


     @media (max-width: 800px)
       grid-template-columns: 20px [content-start] 2fr [word-start] minmax(auto, 720px) [word-end] 2fr [content-end] 20px

     &:hover
       color: $accent-color

     *
       grid-column: word
       display: none

     img
       width: 100%

     h1, .date
       display: unset
       *
        display: unset


     // styles
     .imageblock.hero
        grid-row: top
        grid-column: word

     .date
        grid-row: middle
        color: $gray-color

     h1
        grid-row: bottom
        margin: 0

        font-weight: 500
        letter-spacing: -1px
        line-height: 3.5rem


     &.item-0
       .imageblock.hero

          display: unset

          grid-row: top
          grid-column: word

          *
            display: unset

       .date
          grid-row: middle
          color: $gray-color


       h1
          grid-row: bottom
          margin: 0
</style>


<div class="postlink">
  <a href="/blog/{slug}">
    <div class="wrapper">
      {@html contents}
    </div>
  </a>
</div>
