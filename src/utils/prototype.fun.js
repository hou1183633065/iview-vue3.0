import Vue from 'vue'

// 导出报表
Vue.prototype.exportCsv = function (ref, config) {
  config = Object.assign({
    filename: 'export.csv'
  }, config)
  if (!ref) {
    return false
  } else {
    this.$refs[ref].exportCsv(config)
  }
}

// store中是否加载过当前页
Vue.prototype.storeHasPage = function (pageIndex) {
  return this.$store.state.storeDataList.some((item) => item.page === pageIndex)
}

// 向store提交数据存储
Vue.prototype.plusDataList = function (pageIndex, resData) {
  this.$store.commit('plusDataList', {
    page: pageIndex,
    data: resData
  })
}

// 向store发送选中和取消的数据
Vue.prototype.sendStoreData = function (pageIndex, selectedData, checkedStatus) {
  this.$store.commit('toogleChecked', {
    page: pageIndex,
    data: selectedData,
    checked: checkedStatus
  })
}

// 在computed中以页码数获取store已存数据
Vue.prototype.getIndexData = function (pageIndex) {
  let newData = []
  this.$store.state.storeDataList.forEach(element => {
    if (element.page === pageIndex) {
      newData = element.data
    }
  })
  return newData
}

// 在store中，将按页数存放的数据，整理成为勾选将要下载的数据
Vue.prototype.getCheckedData = function () {
  let newArr = []
  this.$store.state.storeDataList.forEach(element => {
    newArr = newArr.concat(element.data.filter((item) => item._checked))
  })
  return newArr
}

Vue.prototype.testFun = function (params) {
  console.log(this.$store.state)
  console.log(params)
}
