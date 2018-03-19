const student = r => require.ensure(
  [], () => r(require('@/views/studentManage/tpl/studentManage')), 'student')

module.exports = {
  path: 'student',
  component: student,
  children: [

  ]
}
