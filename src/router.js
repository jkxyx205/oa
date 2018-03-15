import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import Inbox from './views/Inbox.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'home',
      component: Home
    },
    {
      path: '/2',
      name: 'inbox',
      component: Inbox
    },
    {
      path: '/3',
      name: 'aa',
      component: Home
    },
    {
      path: '/4',
      name: 'bbb',
      component: Inbox
    }, 
    {
      path: '/dashboard',
      name: '/dashboard',
      component: Dashboard,
    }
  ]
})
