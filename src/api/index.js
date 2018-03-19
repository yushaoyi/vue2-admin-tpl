// FIXME 可将各个模块的api请求也放在各自的模块目录里
import * as Home from './home'
import * as Login from './login'

let Api = {
  home: Home,
  login: Login
}

export default Api
