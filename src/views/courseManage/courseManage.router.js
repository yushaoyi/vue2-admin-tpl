const course = r => require.ensure(
  [], () => r(require('@/views/courseManage/tpl/courseManage')), 'course')

module.exports = {
  path: 'course',
  component: course,
  children: [

  ]
}
