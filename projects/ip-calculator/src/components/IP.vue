<template lang="pug">
  span.ip
    span.kind(@click="index = index + 1", :class="kind") {{kind}}
    span.address  {{format(ip)}}
</template>

<script>

import ip6addr from "ip6addr"

export default {
  name: 'ip',
  data: function (){
    return {
      index: 0,
      formats: ["v4", "v4-mapped", "v6"]
    }
  },
  props: ['ip'],
  methods: {
    format: function(ip) {
      return ip.toString({format: this.formats[this.index % this.formats.length]})

    },
  },
  computed: {
    kind: function() {

        return this.formats[this.index % this.formats.length]

    }
  }
}
</script>
<style scoped lang="sass">

$ipv4color: #E5A0B1
$ipv4mappedcolor: #F1CDBD
$ipv6color: #92ACAF


.ip
 padding: 3px
 border-bottom: 1px dashed $ipv4color
 cursor: pointer
 vertical-align: middle
 margin: 0px 3px
 display: inline-block
 transition: all 80ms ease-in-out


 & .kind
   font-size: .8em
   vertical-align: middle
   padding: 0px 3px


   &.v4
     color: darken($ipv4color, 20%)
     border: 1px solid lighten($ipv4color, 15%)
     background-color: lighten($ipv4color, 20%)

     &:hover
       background-color: lighten($ipv4color, 21%)

   &.v4-mapped
     color: darken($ipv4mappedcolor, 20%)
     border: 1px solid lighten($ipv4mappedcolor, 15%)
     background-color: lighten($ipv4mappedcolor, 20%)

     &:hover
       background-color: lighten($ipv4mappedcolor, 21%)

   &.v6
     color: darken($ipv6color, 20%)
     border: 1px solid lighten($ipv6color, 15%)
     background-color: lighten($ipv6color, 20%)

     &:hover
       background-color: lighten($ipv6color, 21%)
</style>

