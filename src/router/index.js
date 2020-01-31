import Vue from 'vue'
import Router from 'vue-router'
import Invitation from '@/components/Invitation'
import Particulars from '@/components/Particulars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hi',
      component: Invitation
    },
    {
      path: '/Particulars',
      name: 'Particulars',
      component: Particulars
    }
  ]
})
