const teacher = r => require.ensure(
  [], () => r(require('@/views/teacherManage/tpl/teacherManage')), 'teacher')

module.exports = {
  path: 'teacher',
  component: teacher,
  children: [

  ]
}
