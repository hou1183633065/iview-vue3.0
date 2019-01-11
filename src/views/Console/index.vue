<template>
  <div class="Console">
    <head-line title="警报统计"></head-line>
  </div>
</template>

<script>
import HeadLine from '@/components/HeadLine'
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
    setTimeout(() => {
      this.count1 = 100
    }, 3000)
  }
}
</script>
