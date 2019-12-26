<script>
import { writable } from "svelte/store"
import { spring } from "svelte/motion"

let colors = [
        '#f44336',
        '#E91E63',
        '#9C27B0',
        '#673AB7',
        '#3F51B5',
        '#2196F3',
        '#03A9F4',
        '#00BCD4',
        '#009688',
        '#4CAF50',
        '#8BC34A',
        '#CDDC39',
        '#FFEB3B',
        '#FFC107',
        '#FF9800',
        '#FF5722',
      ]
let circles = []
let clickstart
let duration
function random(min, max) {
  return Math.floor(Math.random()*(parseInt(max)-parseInt(min)+1)+parseInt(min))
}

function addCircle(event) {

  clickstart = true
  duration = 0

  let newCircle = {x: event.clientX, y: event.clientY, r: 1, tx: random(-300, 300), maxr: random(10, 30)}
  circles = [...circles, newCircle]
  //requestAnimationFrame(animate)
}

function clickStopped(event) {
  clickstart = false
  console.log(duration, circles)
}

const animate = timestamp => {

  if (clickstart == true) {
    duration = duration + 1
    circles[circles.length - 1].r = duration
  }

  circles.forEach(function (circle) {
    circle.r = Math.max(circle.r - 1, 0)
  })

  circles = circles
  requestAnimationFrame(animate)
}
//requestAnimationFrame(animate)

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
  on:mousedown="{addCircle}"
  on:mouseup="{clickStopped}"
  >
  <g id="wrapper">
    {#each circles as circle, i}
      <circle cx="{circle.x}" cy="{circle.y}" r="{circle.r}" fill="{colors[i % colors.length]}">
      <!--
        <animate attributeName = "r" values = "{circle.r};{circle.maxr};{circle.r}" dur="10s" repeatCount="indefinite"/>
        <animate attributeName = "cx" values = "{circle.x};{circle.x + circle.tx};{circle.x}" dur="10s" repeatCount="indefinite"/>
        -->
      </circle>
    {/each}
  </g>
</svg>

