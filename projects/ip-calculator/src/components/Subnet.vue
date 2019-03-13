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
            div.column.is-full
              div.columns.titles
                  div.column.is-one-quarter
                    p Network
                  div.column.is-one-half
                    p IP range
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
          div.columns.is-centered
            div.column.is-full
              div.columns.titles
                  div.column.is-one-quarter
                    p Subnet mask
                  div.column.is-one-half
                    p Available IPs
                  div.column.is-one-quarter
                    p Broadcast
              div.columns.ips
                  div.column.is-one-quarter
                    p {{subnet.mask}}
                  div.column.is-half
                    p {{subnet.hosts}}
                  div.column.is-one-quarter

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
import ip6addr from "ip6addr";
var Address4 = require("ip-address").Address4;
var Address6 = require("ip-address").Address6;
import ipaddrjs from "ipaddr.js";

import ip from "@/components/IP.vue";

export default {
  name: "subnet",
  components: {
    ip
  },
  data: function() {
    return {
      //input: "192.168.1.0/24",
      input: "2001:db8:85a3::8a2e:370:7334/64",
      cidir: undefined
    };
  },
  methods: {
    getMask: function(cidr) {
      try {
        return ipaddrjs.IPv4.subnetMaskFromPrefixLength(
          this.cidr.prefixLength()
        ).toString();
        //return new Address4(cidr.toString()).mask()
      } catch (e) {
        return new Address6(cidr.toString()).mask();
      }
    },

    getNetwork: function(cidr) {
      try {
        //return ip6addr.parse(ipaddrjs.IPv4.networkAddressFromCIDR(cidr.toString()).toString())

        return new ip6addr.parse(
          Address4(cidr.toString())
            .startAddress()
            .correctForm()
        );
      } catch (e) {
        return ip6addr.parse(
          new Address6(cidr.toString()).startAddress().correctForm()
        );
      }
    },
    getBroadcast: function(cidr) {
      try {
        return cidr.broadcast();
      } catch (e) {
        return "";
      }
    },
    getHosts: function(ip1, ip2) {
      try {
        return ip1.toLong() - ip2.toLong() + 1;
      } catch (e) {
        let int1 = new Address6(ip1.toString()).bigInteger();
        let int2 = new Address6(ip2.toString()).bigInteger();

        return int1.subtract(int2).toString();
      }
    }
  },
  computed: {
    subnet: function() {
      try {
        this.cidr = ip6addr.createCIDR(this.input);

        let network = "";
        let mask = "";
        let broadcast = "";
        let hosts = "";

        try {
          hosts = this.getHosts(this.cidr.last(), this.cidr.first());
          broadcast = this.getBroadcast(this.cidr);
          network = this.getNetwork(this.cidr);
          mask = this.getMask(this.cidr);
        } catch (e) {
          console.log(e);
        }

        return {
          first: this.cidr.first(),
          last: this.cidr.last(),
          address: this.cidr.address(),
          prefixLength: this.cidr.prefixLength(),
          network: network,
          mask: mask,
          broadcast: broadcast,
          hosts: hosts
        };
      } catch (e) {
        this.cidir = undefined;
        return e;
      }
    }
  }
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
