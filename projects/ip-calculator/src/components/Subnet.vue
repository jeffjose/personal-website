<template lang="pug">
  span.subnet
    div.columns.is-centered.subnetinput
      div.column
        div.entertext Enter IP in CIDR Format
        input(v-model="input", placeholder="Enter IP in CIDR")

    div.columns.is-centered.subnetresults
      div.column
        div.results
          div.resultstext Subnet Details

          div.columns
            div.column.left
              div.header IP Range
            div.column.right
              ip(:ip="subnet.first")
              span →
              ip(:ip="subnet.last")

          div.columns
            div.column.left
              div.header Subnet mask
            div.column.right
              div.mask {{subnet.mask}}

          div.columns.is-centered
            div.column.left
              div.header Network Address
            div.column.right
              ip(:ip="subnet.network")

          div.columns.is-centered
            div.column.left
              div.header Broadcast Address
            div.column.right
              ip(:ip="subnet.broadcast")



    //p {{subnet}}
    //p --------------
    //ip(:ip="subnet.first")
    //ip(ip="8.8.8.8")
    //ip(ip="2001:4860:4860::8888")
    //p --------------
    //div.results
    //  span Your IP range is
    //  ip(:ip="subnet.first")
    //  span ->
    //  ip(:ip="subnet.last")
    //  span Your network address is
    //  ip(:ip="subnet.network")
    //  p Broadcast address is
    //  ip(:ip="subnet.broadcast")
</template>

<script>

import ip6addr from "ip6addr"
import ipaddress from "ip-address"
import ipaddrjs from "ipaddr.js"

import ip from "@/components/IP.vue"

export default {
  name: "subnet",
  components: {
    ip
  },
  data: function() {
    return {
      input: "192.168.1.0/24",
      cidir: undefined
    }
  },
  computed: {
    subnet: function() {
      try {

        this.cidr =  ip6addr.createCIDR(this.input);

        return {
          'first': this.cidr.first().toString(),
          'last': this.cidr.last().toString(),
          'broadcast': this.cidr.broadcast().toString(),
          'address': this.cidr.address().toString(),
          'network': ipaddrjs.IPv4.networkAddressFromCIDR(this.cidr.toString()).toString(),
          'mask': ipaddrjs.IPv4.subnetMaskFromPrefixLength(this.cidr.prefixLength.toString()).toString(),
          'prefixLength': this.cidr.prefixLength(),
    }
        }
      catch(e) {
        this.cidir = undefined
        return e
      }

    },
  },
};
</script>

<style scoped lang="sass">
@import "~bulma/sass/utilities/initial-variables"

$brandcolor: #F1CDBD

$inputcolor: $brandcolor

$resultscolor: #92ACAF

.subnet
  display: flex
  justify-content: center
  flex-direction: column

.subnetinput
  .entertext
    text-align: center
    font-size: 1.2em
    background-color: lighten($inputcolor, 10%)
    color: darken($inputcolor, 30%)
    padding-top: .25em

  input
    text-align: center
    outline: none
    border-radius: 0px
    box-shadow: none
    border: none
    border-bottom: 2px solid darken($inputcolor, 30%)
    font-size: 3rem
    background-color: lighten($inputcolor, 10%)
    color: darken($inputcolor, 30%)
    line-height: 0px
    height: 1.5em
    margin-bottom: 0.25em
    width: 100%

.subnetresults
  text-align: center

  .resultstext
    color: darken($resultscolor, 30%)
    font-size: 1.2em
    margin-bottom: 1em

  .results
    background-color: lighten($resultscolor, 30%)
    padding: .5em 0 1.25em 0

    .column
      padding: 0.15em


.left
  text-align: right
  vertical-align: middle

  .header
    color: darken($resultscolor, 30%)
    margin-top: 4px


.right
  text-align: left
  vertical-align: middle

.mask
  margin-top: 5px
  margin-left: 8px
</style>
