const websiteSetting = r => require.ensure(
  [], () => r(require('@/views/websiteSettingManage/tpl/websiteSettingManage')), 'websiteSetting')

module.exports = {
  path: 'websiteSetting',
  component: websiteSetting,
  children: [

  ]
}
