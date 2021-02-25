import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Rap from './Rap.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/rap',
      component: Rap
    },
    {
      path: '/github',
      beforeEnter() {location.href = 'http://github.com/RiadJoul'}
    }
];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
