const storageMixins = {
  created () {
    this.storageKey = this.$route.name + 'Data'
  },
  mounted () {
    // this.sessionStorage.getItem(this.storageKey)
    console.log(this.sessionStorage.getItem(this.storageKey))
  },
  data () {
    return {
      storageKey: ''
    }
  }
}

export default storageMixins
