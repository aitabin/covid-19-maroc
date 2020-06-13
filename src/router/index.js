import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueRegionMap from '@/components/VueRegionMap'
import VueProvinceMap from '@/components/VueProvinceMap'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/regions',
      name: 'VueRegionMap',
      component: VueRegionMap
    },
    {
      path: '/provinces',
      name: 'VueProvinceMap',
      component: VueProvinceMap
    }
  ]
})
