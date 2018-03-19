const arrangingCourse = r => require.ensure(
  [], () => r(require('@/views/arrangingCourseManage/tpl/arrangingCourseManage')), 'arrangingCourse')

module.exports = {
  path: 'arrangingCourse',
  component: arrangingCourse,
  children: [

  ]
}
