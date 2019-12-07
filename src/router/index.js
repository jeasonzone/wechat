import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Linkman from '../views/Linkman.vue'
import Found from '../views/Found.vue'
import Me from '../views/Me.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/linkman',
    name: 'linkman',
    component: Linkman
  },
  {
    path: '/found',
    name: 'found',
    component: Found
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
  {
    path:'/*',
    redirect:'/home'
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
