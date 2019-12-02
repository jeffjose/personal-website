<script>
import {writable} from "svelte/store"

let coords = writable({x: 10, y:10})
</script>


<style lang="sass">
svg
  height: 100%
  width: 100%
  position: absolute

circle
  opacity: 0.5

</style>

<svg on:mousemove="{e => coords.set({x:e.clientX, y:e.clientY})}">
  <g id="wrapper">
    <circle r="10" cx="{$coords.x}"  cy="{$coords.y}"  fill="red">
  </g>
</svg>
