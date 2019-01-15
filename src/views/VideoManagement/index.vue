<template>
  <div class="VideoManagement">
    <h1>This is an VideoManagement page --> {{message}}</h1>
  </div>
</template>

<script>
import storageMixins from '@/mixins/storageMixins'
export default {
  mixins: [storageMixins],
  created () {
    console.log(this.storageKey)
  },
  mounted () {
  },
  methods: {

  },
  data () {
    return {
      message: 'hello'
    }
  }
}
</script>
