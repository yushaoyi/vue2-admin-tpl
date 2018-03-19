<template>
  <div class="header border-b">
    <div class="logo">
      <img src="~assets/imgs/logo.png" width="150" />
    </div>

    <div class="header--right" >
      <div class="header-menu">
        <el-menu
          :default-active="menuActiveIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-tooltip v-for="(menu, index) in headMenuList" :key="index" class="item" effect="dark" :content="menu.name"
                      placement="bottom">
            <el-menu-item :index="menu.url">{{menu.name}}</el-menu-item>
          </el-tooltip>
        </el-menu>
      </div>
      <div class="header-text">
        <span class="l-sp">用户：</span>
        <span class="r-sp">{{userInfo.account}}</span>
      </div>
      <a class="header-logout" title="退出" @click="exit">
        <i class="iconfont icon-exit"></i>
      </a>
    </div>

  </div>
</template>
<script>
  import Api from 'api'
  import Util from 'util'
  import { mapGetters } from 'vuex'

  export default {
    name: 'headerNav',
    computed: {
      defaultActiveIndex: function () {
        let ary = this.$route.path.split('/')
        return (ary && ary.length > 2) ? ary[2] : ''
      },
      ...mapGetters({
        userInfo: 'userInfo',
        headMenuList: 'headMenuList',
        leftMenuList: 'leftMenuList'
      })
    },
    beforeDestroy () {

    },
    data () {
      return {
        menuActiveIndex: this.defaultActiveIndex
      }
    },

    created () {
      let ary = this.$route.path.split('/')
      this.menuActiveIndex = (ary && ary.length > 2) ? ary[2] : ''
    },

    mounted () {

    },
    methods: {

      doExit () {
        this.$store.dispatch('testExit')
          .then(res => {
            Util.toastSuccess('退出成功!')
            Util.removeSg('token')
            Util.removeSg('userInfo')
            Util.removeSg('permission')
            this.$router.replace({
              path: '/login'
            })
          }, err => {

          })
      },

      exit () {
        Util.confirm('您确定要退出吗？')
          .then(res => {
            this.doExit()
          }, err => {

          })
      },

      handleSelect (item, path) {
        // FIXME element-ui 的menu 缺少一个阻止选择的方法（选中之前做的处理）
        this.menuActiveIndex = item
        let menuList = this.leftMenuList.filter(ele => ele.pms.split('.')[0] === item)
        if (menuList.length > 0) {
          // todo 根据权限判断可以跳转的地址
          this.$router.push({path: menuList[0].url})
        } else {
          Util.toastWarning('功能正在开发中，敬请期待~', 3500)
          // fix 还原菜单选中 使用$nextTick
          this.$nextTick(() => {
            this.menuActiveIndex = this.defaultActiveIndex
          })
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  /*@import "../../styles/var";*/

  .header {
    width: 100%;
    height: $header-height;
    background-color: #545c64;
    /*border-bottom: #ddd solid 1px;*/
    box-shadow: 0px 3px 6px 0px #bbbbbb;
    .logo {
      position: absolute;
      top: 0;
      left: 0;
      padding: 15px 0 0 20px;
      cursor: pointer;
    }

    .header--right {
      margin-left: 200px;
      overflow: hidden;
      position: relative;
      height: $header-height;
    }

    .el-menu--horizontal>.el-menu-item {
      float: left;
      height: $header-height;
      line-height: $header-height;
      margin: 0;
      border-bottom: 2px solid transparent;
      color: #909399;
    }

    .header-menu {
      position: absolute;
      left: 0;
      right: 0;
    }

    .header-text {
      position: absolute;
      right: 80px;
      height: 100%;
      line-height: $header-height;

      .l-sp, .r-sp {
        color: #fff;
      }

    }

    a {
      line-height: 1;
      padding: 27px 0;
    }

    i {
      color: #fff;
    }

    .header-setting-a {
      right: 70px;
    }

    .header-logout {
      position: absolute;
      right: 30px;
    }

  }
</style>
