import {createNamespacedHelpers } from 'vuex'

const { mapState, mapActions} = createNamespacedHelpers('homeModule/home')

export default {
  computed: {
    ...mapState({
      homeList: state => state.homeList
    })
  },
  data () {
    return {

    }
  },

  mounted () {
    // this.$store.dispatch('getHomeList', '')
    // this.getHomeList()
    console.log('ssss') // 考虑在getHomeList后做的处理，是否需要将getHomeList返回promise
  },
  methods: {
    ...mapActions([
      'getHomeList'
    ])
  }
}
