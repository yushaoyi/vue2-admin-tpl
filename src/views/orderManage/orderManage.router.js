const order = r => require.ensure(
  [], () => r(require('@/views/orderManage/tpl/orderManage')), 'order')

module.exports = {
  path: 'order',
  component: order,
  children: [

  ]
}
