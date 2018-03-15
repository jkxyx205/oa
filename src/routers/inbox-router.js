import Vue from 'vue'
import Router from 'vue-router'
import IndexContent from '../components/inbox/InboxContent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'inbox/:id',
      name: 'inboxDetail',
      component: IndexContent
    }
  ]
})
