import router from '@/router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import Util from 'util'

let fromState = ''
router.beforeEach((to, from, next) => {
  // if (to.path == '/login') {
  //   Util.hybrid.setWindow(440, 480, 5, 1)
  //   Util.fun.removeSg('userid')
  //   Util.fun.removeSg('userInfo')
  //   Util.fun.removeSg('token')
  // }
  // fromState = from
  // let token = Util.fun.getSg('token')
  // if (!token && to.path != '/login') {
  //   setTimeout(() => {
  //     next({path: '/login'})
  //   }, 1000)
  // } else {
  //   NProgress.start();
  //   next()
  // }
  NProgress.start();
  next()
})

router.afterEach(transition => {
  // console.log(fromState.path)
  // if (fromState.path == '/login') {
  //   setTimeout(() => {
  //     Util.hybrid.setWindow(2000, 1000, 0, 23)
  //   }, 100)
  // }
  NProgress.done();
})
