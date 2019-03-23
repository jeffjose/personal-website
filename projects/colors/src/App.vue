<template lang="pug">
  #app
    toolbar(:login="login", :logout="logout", :profile="profile", :loggedIn="loggedIn")
    router-view
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import Toolbar from "@/components/Toolbar";
export default {
  name: "app",

  components: { Toolbar },

  computed: {
    ...mapGetters("user", {
      profile: "profile",
      loggedIn: "loggedIn"
    })
  },

  methods: {
    ...mapActions("user", {
      login: "login",
      logout: "logout"
    })
  }
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Roboto|Material+Icons")
@import url("https://cdn.materialdesignicons.com/3.5.95/css/materialdesignicons.min.css")

// 1. Import the initial variables
@import "~bulma/sass/utilities/initial-variables"

// Customizations go here

$family-sans-serif: 'Roboto', sans-serif

// 2. Import the rest of Bulma
@import "~bulma"

html
  background-color: white
</style>
