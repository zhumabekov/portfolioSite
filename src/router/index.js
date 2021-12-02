import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'
import AboutMe from '@/components/pages/Aboutme'
import Contacts from '@/components/pages/Contacts'
import Skills from '@/components/pages/Skills'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/aboutme', name: 'aboutme', component: AboutMe },
  { path: '/contacts', name: 'contacts', component: Contacts },
  { path: '/skills', name: 'skills', component: Skills },
  { path: '*', redirect: { name: 'home' } }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
