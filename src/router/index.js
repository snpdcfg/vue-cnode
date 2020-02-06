import Vue from 'vue'
import Router from 'vue-router'
import Invitation from '@/components/Invitation'
import Particulars from '@/components/Particulars'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        default: Invitation
      }
    },
    {
      path: '/essay/:id&auther=:name',
      name: 'essay',
      components: {
        main: Particulars,
        right: User
      }
    },
    {
      path: '/user/:name',
      name: 'user',
      components: {
        main: User
      }
    }
  ]
})
