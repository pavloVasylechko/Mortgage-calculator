import Vue from 'vue'
import VueRouter from 'vue-router'

import vManagement from '../components/v-management.vue'
import vCalculator from '../components/v-calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'management',
    component:vManagement
  },
  {
    path:'/calculator',
    name:'calculator',
    component:vCalculator
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
