import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyTable from '@/components/MyTable'
import PhotoList from '@/components/PhotoList'
import ProgressPlan from '@/components/ProgressPlan'
import PhotoSchedule from '@/components/PhotoSchedule'
import FinishTable from '@/components/FinishTable'
import UserList from '@/components/UserList'
import UserListadd from '@/components/UserListadd'
import test from '@/components/test'
import Login from '@/login/login'
import Home from '@/home/home'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/my-table',
      component:Home,

      children: [{
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
        }, {
          path: '/schedule',
          name: 'PhotoSchedule',
          component: PhotoSchedule
        }, {
          path: '/user-list',
          name: 'UserList',
          component: UserList
        }, {
          path: '/User-listadd',
          name: 'UserListadd',
          component: UserListadd
        }, {
          path: '/test',
          name: 'test',
          component: test
        },

      ]
    },


  ]
})
