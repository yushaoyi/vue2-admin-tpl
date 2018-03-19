<template>
  <div class="left-nav">
    <div class="nav-dedent" @click="toggleCollapse">
      <el-tooltip v-if="isCollapse" class="item" effect="dark" :content="'展开'" placement="right">
        <i class="iconfont icon-indent" style="font-size: 18px;"></i>
      </el-tooltip>
      <el-tooltip v-if="!isCollapse" class="item" effect="dark" :content="'收起'" placement="right">
        <!--:class="[isCollapse ? 'icon-indent' : 'icon-dedent']"-->
        <i class="iconfont icon-dedent" style="font-size: 18px;"></i>
      </el-tooltip>
    </div>
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item  v-for="(menu, index) in leftMenuList" :key="index" v-if="menu.url.indexOf(menuParent) > -1" :index="menu.url">
        <i class="iconfont" style="font-size: 18px;" :class="menu.iconClass"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'leftNav',
    computed: {
      ...mapGetters({
        leftMenuList: 'leftMenuList',
        isCollapse: 'isCollapse'
      }),
      defaultActive: function () {
        return this.$route.path
//        return this.$route.path.replace('/', '');
      },
      menuParent: function () {
        let len = this.$route.matched ? this.$route.matched.length : 0
        let str = this.$route.matched[len - 1].parent ? this.$route.matched[len - 1].parent.path : ''
        return str
      }
    },
    data () {
      return {

      }
    },
    methods: {
      toggleCollapse () {
        this.$store.dispatch('toggleNavCollapse', !this.isCollapse)
      }
    },
    components: {

    }
  }
</script>
<style lang="scss" scoped>
  .left-nav {
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    border-right: solid 1px #e6e6e6;

    ul {
      height: 100%;
    }

    i {
      margin-right: 15px;
    }

    .nav-dedent {
      /*border-right: solid 1px #e6e6e6;*/
      border-bottom: 1px solid #f2efe2;
      cursor: pointer;
      width: 100%;
      height: 42px;
      line-height: 42px;
      text-align: right;
      padding-right: 10px;
      padding-left: 20px;
    }
  }

</style>
