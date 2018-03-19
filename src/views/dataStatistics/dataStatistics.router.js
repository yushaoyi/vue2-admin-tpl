const dataStatistics = r => require.ensure(
  [], () => r(require('@/views/dataStatistics/tpl/dataStatistics')), 'dataStatistics')

module.exports = {
  path: 'dataStatistics',
  component: dataStatistics,
  children: [

  ]
}
