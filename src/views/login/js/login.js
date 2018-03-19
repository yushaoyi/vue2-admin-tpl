import Api from 'api'
import Util from 'util'
import * as types from '@/store/mutation-types'

export default {

  data () {

    var validateAccount = (rule, value, callback) => {
      if (!Util.checkPhone(value)) {
        callback(new Error('手机号格式不正确'));
      } else {
        callback();
      }
    }

    return {
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          // { validator: validateAccount, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      },
      fm: {
        account: '',
        password: ''
      },
      isSubmit: false
    }
  },

  mounted () { },
  methods: {

    doLogin () {
      this.isSubmit = true
      this.$store.dispatch('testLogin', {
        account: this.fm.account,
        password: this.fm.password,
        is_web: 2
      })
        .then(res => {
          Util.setSg('token', res.token)
          Util.setSgObj('userInfo', res)
          Util.toastSuccess('登录成功！', 3500)
          this.$store.dispatch('getUserPermission').then(res => {
            // todo 根据权限判断可以跳转的地址
            this.$router.push({
              path: '/app/home/homePage'
            })
            Util.setSgObj('permission', res)
            this.isSubmit = false
          }, err => {
            this.isSubmit = false
          })
        }, err => {
          this.isSubmit = false
        })

    },

    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.doLogin()
        } else {
          return false
        }
      })
    },

    enterHandler (event, form) {
      if (event.keyCode == 13) {
        this.login(form)
      }
    }
  }

}
