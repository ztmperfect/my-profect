import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyTable from '@/components/MyTable'
import PhotoList from '@/components/PhotoList'
import ProgressPlan from '@/components/ProgressPlan'
import PhotoSchedule from '@/components/PhotoSchedule' 
import FinishTable from '@/components/FinishTable' 
import UserList from '@/components/UserList'
import UserAdd from '@/components/UserAdd'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyTable',
      component: MyTable
    },
    {
      path: '/my-table',
      name: 'MyTable',
      component: MyTable
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user-photo',
      name: 'PhotoList',
      component: PhotoList
    }, {
      path: '/statistics',
      name: 'ProgressPlan',
      component: ProgressPlan
    },
    {
      path: '/finish-table',
      name: 'FinishTable',
      component: FinishTable
    },{
      path: '/schedule',
      name: 'PhotoSchedule',
      component: PhotoSchedule
    },{
      path: '/user-list',
      name: 'UserList',
      component: UserList
    },{
      path: '/user-add',
      name: 'UserAdd',
      component: UserAdd
    },
 
  ]
})
