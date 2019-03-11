<template lang="pug">
  span.subnet
    div.columns.is-centered.subnetinput
      div.column
        div.entertext Enter IP in CIDR Format
        input(v-model="input", placeholder="Your input here")

    div.columns.is-centered.subnetresults-one-line
      div.column
        div.results-one-line
          div.columns.is-centered
            div.column.is-two-thirds
              div.columns.titles
                  div.column.is-one-quarter
                    p Network
                  div.column.is-one-half
                    p IP Range ({{subnet.hosts}} hosts)
                  div.column.is-one-quarter
                    p Broadcast
              div.columns.ips
                  div.column.is-one-quarter
                    ip(:ip="subnet.network")
                  div.column.is-half
                    ip(:ip="subnet.first")
                    span →
                    ip(:ip="subnet.last")
                  div.column.is-one-quarter
                    ip(:ip="subnet.broadcast")

    //div.columns.is-centered.subnetresults
    //  div.column
    //    div.results

    //      div.columns
    //        div.column.left.is-one-fifth
    //          div.header IP Range
    //        div.column.right
    //          ip(:ip="subnet.first")
    //          span →
    //          ip(:ip="subnet.last")

    //      div.columns
    //        div.column.left.is-one-fifth
    //          div.header Subnet mask
    //        div.column.right
    //          div.mask {{subnet.mask}}

    //      div.columns
    //        div.column.left.is-one-fifth
    //          div.header Prefix length
    //        div.column.right
    //          div.mask {{subnet.prefixLength}}

    //      div.columns
    //        div.column.left.is-one-fifth
    //          div.header Number of hosts
    //        div.column.right
    //          div.mask {{subnet.hosts}}

    //      div.columns.is-centered
    //        div.column.left.is-one-fifth
    //          div.header Network Address
    //        div.column.right
    //          ip(:ip="subnet.network")

    //      div.columns.is-centered
    //        div.column.left.is-one-fifth
    //          div.header Broadcast Address
    //        div.column.right
    //          ip(:ip="subnet.broadcast")


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
      //input: "::ffff:c774:76cf/24",
      cidir: undefined
    }
  },
  computed: {
    subnet: function() {
      try {

        this.cidr =  ip6addr.createCIDR(this.input);

        let network = ''
        let mask = ''
        let broadcast = ''
        let hosts = ''

        try {
          network =  ipaddrjs.IPv4.networkAddressFromCIDR(this.cidr.toString()).toString()
          mask = ipaddrjs.IPv4.subnetMaskFromPrefixLength(this.cidr.prefixLength.toString()).toString()
          broadcast = this.cidr.broadcast().toString()
          hosts = this.cidr.last().toLong() - this.cidr.first().toLong() + 1
        }
        catch (e) {
        }

        return {
          'first': this.cidr.first().toString(),
          'last': this.cidr.last().toString(),
          'address': this.cidr.address().toString(),
          'prefixLength': this.cidr.prefixLength(),
          'network': network,
          'mask': mask,
          'broadcast': broadcast,
          'hosts': hosts,
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

  .results
    background-color: lighten($resultscolor, 30%)
    padding: 1.25em 0 1.25em 0

    .column
      padding: 0.15em


.left
  text-align: right
  vertical-align: middle

  .header
    color: darken($resultscolor, 80%)
    margin-top: 4px


.right
  text-align: left
  vertical-align: middle

.mask
  margin-top: 5px
  margin-left: 8px

.subnetresults-one-line
  text-align: center

  .results-one-line
    .ip
      margin:0 20px

    .titles
      margin: 0px
      font-weight: bold

</style>
