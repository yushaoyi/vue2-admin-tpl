const home = r => require.ensure([], () => r(require('@/views/homeManage/tpl/homeManage')), 'home')
const homePage = r => require.ensure([], () => r(require('@/views/homeManage/tpl/home/home')), 'home')
const timeTable = r => require.ensure([], () => r(require('@/views/homeManage/tpl/timeTable/timeTable')), 'home')

module.exports = {
  path: 'home',
  component: home,
  children: [
    {
      path: '',
      component: homePage,
      meta: []
    },
    {
      path: 'homePage',
      component: homePage,
      meta: []
    },
    {
      path: 'timeTable',
      component: timeTable,
      meta: []
    }
  ]
}
