<template lang="pug">
  span.ip
    span.kind {{kind}}
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

      return ip6addr.parse(this.ip).kind().replace('', '')

    }
  }
}
</script>
<style scoped lang="sass">

$ipcolor: #E5A0B1


.ip
 padding: 3px
 border-bottom: 1px dashed $ipcolor
 cursor: pointer
 vertical-align: middle
 margin: 0px 3px
 display: inline-block

 &:hover
   background-color: #eee

 & .kind
   font-size: .8em
   vertical-align: middle
   border: 1px solid lighten($ipcolor, 15%)
   background-color: lighten($ipcolor, 20%)
   color: darken($ipcolor, 20%)
   padding: 0px 3px
</style>

