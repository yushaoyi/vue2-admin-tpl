const customer = r => require.ensure(
  [], () => r(require('@/views/customerManage/tpl/customerManage')), 'customer')
const myCustomer = r => require.ensure([], () => r(require('@/views/customerManage/tpl/customer/customer')), 'customer')

module.exports = {
  path: 'customer',
  component: customer,
  children: [
    {
      path: 'myCustomer',
      component: myCustomer
    }
  ]
}
