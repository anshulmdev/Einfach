/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Main layouts
import LayoutBackend from '@/layouts/variations/BackendStarter.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'

// Register Vue Router
Vue.use(Router)

// Frontend Page Example
const Landing = () => import("@/views/starter/Landing.vue")

// Backend Page Example
const Dashboard = () => import("@/views/starter/Dashboard.vue")

// Router Configuration
export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/landing',
      component: LayoutSimple,
      children: [
        {
          path: '/landing',
          name: 'Landing',
          component: Landing
        }
      ]
    },
    {
      path: '/backend',
      redirect: '/backend/dashboard',
      component: LayoutBackend,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
