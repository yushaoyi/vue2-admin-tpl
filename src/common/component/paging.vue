<template>
  <el-pagination
    class="mt15"
    :background="true"
    v-show="pageVisible"
    layout="prev, pager, next"
    :page-size="pageSize"
    @current-change="currChange"
    :total="total">
  </el-pagination>
</template>
<script>
  export default {
    name: 'paging',
    props: ['total', 'pageSize', 'page-change'],
    data () {
      return { }
    },
    methods: {
      currChange: function (index) {
        this.$emit('page-change', index)
      }
    },
    computed: {
      pageVisible: function () {
        return this.total / this.pageSize > 1;
      }
    },
    components: {

    }
  }
</script>
<style lang="scss" scoped>
  .mt15 {
    margin-top: 15px;
  }
</style>
