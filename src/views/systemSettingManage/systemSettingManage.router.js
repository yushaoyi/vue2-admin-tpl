const systemSetting = r => require.ensure(
  [], () => r(require('@/views/systemSettingManage/tpl/systemSettingManage')), 'systemSetting')

module.exports = {
  path: 'systemSetting',
  component: systemSetting,
  children: [

  ]
}
