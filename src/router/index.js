import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Github',
    name: 'Github',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Github.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/projects.vue')
  },
  {
    path: '/achievements',
    name: 'achievements',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/achievements.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
