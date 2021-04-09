/*
 * @Description: 
 * @Autor: dingyi
 * @Date: 2020-03-27 11:41:45
 * @LastEditors: dingyi
 * @LastEditTime: 2020-06-23 16:39:39
 * @FilePath: /look-web/src/views/governance-kava/minxinData.js
 */
export default {
  created() {
    this.init()
  },
  data() {
    return {
      address: '',
      loading: false
    }
  },
  methods: {
    async init() {
      this.loading = true
      if (this.$route.query.address) {
        this.address = this.$route.query.address
      }
      const response = await this.$api.fetch("getCommitteeCommittees");
      this.loading = false
      this.list = response || [];
    },
    async fetchTotalBondedTokens() {
      const res = await this.$api.fetch('getStakingPool')
      this.$store.commit('bondedTokensSet', res.bonded_tokens_val)
      this.init()
    }
  }
}