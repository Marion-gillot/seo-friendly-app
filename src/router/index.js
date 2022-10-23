import Vue from 'vue'
import Router from 'vue-router'
import france from '@/components/france'
import histoire from '@/components/histoire'
import geographie from '@/components/geographie'
import culture from '@/components/culture'

import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'france',
      component: france
    },
    {
      path: '/histoire',
      name: 'histoire',
      component: histoire
    },
    {
      path: '/geographie',
      name: 'geographie',
      component: geographie
    },
    {
      path: '/culture',
      name: 'culture',
      component: culture
    },
  ]
})