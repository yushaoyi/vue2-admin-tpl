import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/404',
      component: resolve => require(['@/views/errorPage/404.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      meta: {},
      component: resolve => require(['@/views/login/tpl/login.vue'], resolve)
    },
    {
      path: '/app',
      meta: {},
      component: resolve => require(['@/views/layout/appMain.vue'], resolve),
      children: [
        require('@/views/homeManage/homeManage.router.js'),
        require('@/views/arrangingCourseManage/arrangingCourseManage.router.js'),
        require('@/views/courseManage/courseManage.router.js'),
        require('@/views/coursewareManage/coursewareManage.router.js'),
        require('@/views/customerManage/customerManage.router.js'),
        require('@/views/dataStatistics/dataStatistics.router.js'),
        require('@/views/orderManage/orderManage.router.js'),
        require('@/views/studentManage/studentManage.router.js'),
        require('@/views/systemSettingManage/systemSettingManage.router.js'),
        require('@/views/teacherManage/teacherManage.router.js'),
        require('@/views/websiteSettingManage/websiteSettingManage.router.js'),
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

export default router
