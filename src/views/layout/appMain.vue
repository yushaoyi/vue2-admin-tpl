<template>
  <section class="app-main">
    <header-nav></header-nav>
    <div class="app-main-container" :class=" { 'app-main--collapse': isCollapse } ">
      <left-nav></left-nav>
        <div class="app-body">
        <div class="content" >
          <router-view :key="key"></router-view>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import headerNav from './headerNav'
  import leftNav from './leftNav'
  import Util from 'util'
  import { mapGetters } from 'vuex'
  import * as types from '@/store/mutation-types'

  export default {
    name: 'appMain',
    components: {
      headerNav,
      leftNav
    },
    computed: {
      key () {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      },
      ...mapGetters({
        isCollapse: 'isCollapse'
      })
    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {
      console.log('---------------------------------------------------------')
      console.log('%cvue2 %cadmin %ctpl', 'font-size:42px;color:#3498DB;font-style:italic', 'font-size:42px;color:#89d04f;font-style:italic', 'font-size:42px;color:#fd6a7f;font-style:italic')
      console.log('---------------------------------------------------------')
      let userInfo = Util.getSgObj('userInfo')
      if (userInfo) {
        this.$store.commit(types.GET_USER_INFO, userInfo)
      }
      let permission = Util.getSgObj('permission')
      if (permission) {
        this.$store.commit(types.GET_USER_PERMISSION, permission)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
