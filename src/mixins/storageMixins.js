const storageMixins = {
  created () {
    this.storageKey = this.$route.name + 'Data'
  },
  mounted () {
    this.sessionStorage.removeItem(this.storageKey)
    // setTimeout(() => {
    //   this.sessionStorage.plusItem(this.storageKey, {
    //     page: 1,
    //     data: {
    //       a: this.data1++,
    //       b: this.data2++,
    //       c: this.data3++
    //     }
    //   })
    //   this.testFun()
    // }, 3000)

    // setTimeout(() => {
    //   this.sessionStorage.plusItem(this.storageKey, {
    //     page: 1,
    //     data: {
    //       a: this.data1++,
    //       b: this.data2++,
    //       c: this.data3++
    //     }
    //   })
    //   this.testFun()
    // }, 6000)

    // setTimeout(() => {
    //   this.sessionStorage.plusItem(this.storageKey, {
    //     page: 2,
    //     data: {
    //       a: this.data1++,
    //       b: this.data2++,
    //       c: this.data3++
    //     }
    //   })
    //   this.testFun()
    // }, 9000)

    // setTimeout(() => {
    //   this.sessionStorage.plusItem(this.storageKey, {
    //     page: 2,
    //     data: {
    //       a: this.data1++,
    //       b: this.data2++,
    //       c: this.data3++
    //     }
    //   })
    //   this.testFun()
    // }, 12000)
  },
  methods: {
    testFun () {
      let newData = this.sessionStorage.getItem(this.storageKey)
      console.log(newData)
    }
  },
  data () {
    return {
      storageKey: '',
      page: 1,
      data1: 1111,
      data2: 1111,
      data3: 1111
    }
  }
}

export default storageMixins
