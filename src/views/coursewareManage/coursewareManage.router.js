const courseware = r => require.ensure(
  [], () => r(require('@/views/coursewareManage/tpl/coursewareManage')), 'courseware')

module.exports = {
  path: 'courseware',
  component: courseware,
  children: [

  ]
}
