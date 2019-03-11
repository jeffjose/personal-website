<template lang="pug">
  span.ip
    span.kind(:class="kind") {{kind}}
    span.address  {{ip}}
</template>

<script>

import ip6addr from "ip6addr"

export default {
  name: 'ip',
  props: {
    ip: String
  },
  computed: {
    kind: function() {

      try {
        return ip6addr.parse(this.ip).kind().replace('', '')
      }
      catch (e) {
        return ""
      }

    }
  }
}
</script>
<style scoped lang="sass">

$ipv4color: #E5A0B1
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


   &.ipv4
     color: darken($ipv4color, 20%)
     border: 1px solid lighten($ipv4color, 15%)
     background-color: lighten($ipv4color, 20%)

     &:hover
       background-color: lighten($ipv4color, 21%)

   &.ipv6
     color: darken($ipv6color, 20%)
     border: 1px solid lighten($ipv6color, 15%)
     background-color: lighten($ipv6color, 20%)

     &:hover
       background-color: lighten($ipv6color, 21%)
</style>

