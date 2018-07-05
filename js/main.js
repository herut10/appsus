'use strict'


import myRoutes from './routes.js'
import appsus from './pages/appsus-cmp.js'


Vue.use(VueRouter);
const myRouter = new VueRouter({
  routes: myRoutes
})

new Vue({
  el: '#app',
  router: myRouter,
  components: {
    appsus
  }
})