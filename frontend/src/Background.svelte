<script>
import { writable } from "svelte/store"
import { spring } from "svelte/motion"

let coords = writable({x: 10, y:10})
let size = spring(0)
</script>


<style lang="sass">
svg
  height: 100%
  width: 100%
  position: absolute

circle
  opacity: 0.5

</style>

<svg
  on:mousemove="{e => coords.set({x:e.clientX, y:e.clientY})}"
  on:mousedown="{() => size.set(60)}"
  >
  <g id="wrapper">
    <circle cx="{$coords.x}" cy="{$coords.y}" r="{$size}" fill="red">
  </g>
</svg>
