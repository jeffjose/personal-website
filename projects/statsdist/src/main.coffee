import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

router = new Router(
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
  ]
)

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount('#app')
