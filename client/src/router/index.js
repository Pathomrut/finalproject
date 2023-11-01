import Vue from 'vue'
import Router from 'vue-router'

//Temples
import TempleIndex from '@/components/Temples/Index'
import TempleCreate from '@/components/Temples/CreateTemple'
import TempleEdit from '@/components/Temples/EditTemple'
import TempleShow from '@/components/Temples/ShowTemple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/temples',
      name: 'temples',
      component: TempleIndex
    },
    {
      path: '/temple/create',
      name: 'temples-create',
      component: TempleCreate
    },
    {
      path: '/temple/edit/:templeId',
      name: 'temple-edit',
      component: TempleEdit
    },
    {
      path: '/temple/:templeId',
      name: 'temple',
      component: TempleShow
    }
  ]
})
