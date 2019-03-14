<template lang="pug">
  #app
    router-view
</template>

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
