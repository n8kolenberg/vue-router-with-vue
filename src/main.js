import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

//To use the vue-router plugin in the application
Vue.use(VueRouter);
//We set up the routes in a separate file to keep things organized - routes.js

//After registering vue-router, I can pass my routes to the VueRouter
const router = new VueRouter({
  routes /*ES6 syntax -> normally this would be routes: routes */,
  mode: 'history', //This removes the need for the # in the url - default mode is hash
  //The following is some mindf%ckery related to scrolling behavior based on anchors on the pages, but since 
  //we don't have a data anchor on the user edit page, this doesn't work
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    if(to.hash) {
      return {selector: to.hash};
    }
    return {x: 0, y: 700};
  }
}); //After passing the routes to VueRouter, I can register them in the Vue instance


new Vue({
  el: '#app',
  router, /* Now that it's registered, I need to render it and I can do that with <router-view></router-view> in App.vue*/
  render: h => h(App)
})
