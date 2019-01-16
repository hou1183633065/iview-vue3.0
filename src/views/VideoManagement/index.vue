<template>
  <div class="VideoManagement">
    <h1>This is an VideoManagement page --> {{message+'--->'+count}}</h1>
    <button @click="handleCount(true)">点此处递加</button>
    <button @click="handleCount(false)">点此处递减</button>
  </div>
</template>

<script>
import storageMixins from '@/mixins/storageMixins'
export default {
  mixins: [storageMixins],
  created () {
    // console.log(this.storageKey)
  },
  mounted () {
    this.subscribe('pubSubKey', (bool) => {
      if (bool) {
        console.log('递加')
        this.count++
      } else {
        console.log('递减')
        this.count--
      }
    })
  },
  methods: {
    handleCount (isAdd) {
      this.publish('pubSubKey', isAdd)
    }
  },
  data () {
    return {
      message: 'hello',
      count: 1
    }
  }
}
</script>
