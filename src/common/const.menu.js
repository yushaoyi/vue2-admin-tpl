
const MENU_INFO = {
  'HEAD': [
    {
      'name': '首页',
      'class': 'iconfont icon-shouye',
      'pms': 'home',
      'url': 'home'
    },
    {
      'name': '招生管理',
      'class': 'iconfont icon-shouye',
      'pms': 'customer',
      'url': 'customer',
      'sets': 'app.customer'
    },
    {
      'name': '课程管理',
      'class': 'iconfont icon-shouye',
      'pms': 'course',
      'url': 'course'
    },
    {
      'name': '学生管理',
      'class': 'iconfont icon-shouye',
      'pms': 'student',
      'url': 'student'
    },
    {
      'name': '教师管理',
      'class': 'iconfont icon-shouye',
      'pms': 'teacher',
      'url': 'teacher'
    },
    {
      'name': '订单管理',
      'class': 'iconfont icon-shouye',
      'pms': 'order',
      'url': 'order'
    },
    {
      'name': '课件管理',
      'class': 'iconfont icon-shouye',
      'pms': 'courseware',
      'url': 'courseware'
    },
    {
      'name': '排课管理',
      'class': 'iconfont icon-shouye',
      'pms': 'arrangingCourse',
      'url': 'arrangingCourse'
    },
    {
      'name': '数据统计',
      'class': 'iconfont icon-shouye',
      'pms': 'dataStatistics',
      'url': 'dataStatistics'
    },
    {
      'name': '官网设置',
      'class': 'iconfont icon-shouye',
      'pms': 'websiteSetting',
      'url': 'websiteSetting'
    },
    {
      'name': '系统设置',
      'class': 'iconfont icon-shouye',
      'pms': 'systemSetting',
      'url': 'systemSetting'
    }
  ],
  'ASIDE': [
    {
      'iconClass': 'icon-home',
      'name': '首页',
      'pms': 'home.homePage',
      'url': '/app/home/homePage',
      'children': [
      ]
    },
    {
      'iconClass': 'icon-timeTable',
      'name': '课表',
      'pms': 'home.timeTable',
      'url': '/app/home/timeTable',
      'children': [
      ]
    },
    {
      'iconClass': 'icon-timeTable',
      'name': '我的客户',
      'pms': 'customer.myCustomer',
      'url': '/app/customer/myCustomer',
      'children': [
      ]
    },
  ]
}

export default MENU_INFO
