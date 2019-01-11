<template>
  <div class="Console">
    <head-line title="警报统计"></head-line>
  </div>
</template>

<script>
import HeadLine from '@/components/HeadLine'
import { getUser } from './src/api'
export default {
  components: {
    HeadLine
  },
  data () {
    return {
      count1: 0
    }
  },
  mounted () {
    this.getDataList(1)
  },
  methods: {
    async getDataList (page) {
      let { success, resData } = await getUser(page)
      if (success) {
        console.log(resData)
      } else {
        console.log('请求失败')
      }
    }
  }
}
</script>
