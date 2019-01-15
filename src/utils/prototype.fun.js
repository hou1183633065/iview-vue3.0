import Vue from 'vue'
import PubSub from 'pubsub-js'

// 消息订阅
Vue.prototype.subscribe = function (eventName, callback) {
  PubSub.subscribe(eventName, (msg, callback) => {
    callback()
  })
}

// 取消消息订阅
Vue.prototype.subscribe = function (eventName, callback) {
  PubSub.unsubscribe(eventName, callback())
}

// 清除消息订阅
Vue.prototype.subscribe = function () {
  PubSub.clearAllSubscriptions()
}

// 消息发布
Vue.prototype.publish = function (eventName, callback) {
  PubSub.publish(eventName, callback())
}

// 本地sessionStorage存储封装
Vue.prototype.sessionStorage = {
  period: 1000 * 60 * 10,
  timestamp: function () {
    return Date.parse(new Date())
  },
  resultIsNull: function (storageKey) {
    let storage = window.sessionStorage.getItem(storageKey)
    if (storage === null || storage === 'null' || storage === '' || storage === '{}' || storage === '[]') {
      return true
    } else {
      return false
    }
  },
  isExpired: function (times) {
    if (this.timestamp() - times > this.period) {
      return true
    } else {
      return false
    }
  },
  setItem: function (storageKey, storageData) {
    window.sessionStorage.setItem(storageKey, JSON.stringify({
      _Version: this.timestamp(),
      _Data: storageData
    }))
  },
  getItem: function (storageKey) {
    let storageData = JSON.parse(window.sessionStorage.getItem(storageKey))
    // 检查键值对数据是否存在
    if (this.resultIsNull(storageKey)) {
      return null
    }

    // 检查数据是否过期
    if (this.isExpired(storageData._Version)) {
      return storageData._Data
    } else {
      this.removeItem(storageKey)
      return null
    }
  },
  updateItem: function (storageKey) {
    // window.sessionStorage.getItem()
  },
  removeItem: function (storageKey) {
    window.sessionStorage.removeItem(storageKey)
  },
  clear: function () {
    window.sessionStorage.clear()
  }
}
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
Vue.prototype.dataHasPage = function (allData, pageIndex) {
  if (!allData.length) {
    return false
  } else {
    return allData.some((item) => item.page === pageIndex)
  }
}

// 向store提交数据存储
Vue.prototype.plusDataList = function (allData, addData, pageIndex) {
  if (!this.dataHasPage(allData, pageIndex)) {
    allData.push({
      data: addData,
      page: pageIndex
    })
  }
  return allData
}

// 向store提交数据存储
// Vue.prototype.plusDataList = function (pageIndex, resData) {
//   this.$store.commit('plusDataList', {
//     page: pageIndex,
//     data: resData
//   })
// }

// 向store发送选中和取消的数据
Vue.prototype.sendCheckedData = function (allData, addData, pageIndex, checkedStatus) {
  let targetData = allData.find((item) => {
    return item.page === pageIndex
  })
  targetData.data.map((item) => {
    addData.forEach(ele => {
      if (JSON.stringify(item) === JSON.stringify(ele)) {
        item._checked = checkedStatus
      }
    })
    return item
  })
  return targetData
}

// 在computed中以页码数获取store已存数据
Vue.prototype.getIndexData = function (allData, pageIndex) {
  if (!allData.length) {
    return []
  } else {
    return allData.filter((item) => {
      return item.page === pageIndex
    })[0].data
  }
}

// 在store中，将按页数存放的数据，整理成为勾选将要下载的数据
Vue.prototype.getCheckedData = function (allData) {
  let newArr = []
  allData.forEach(element => {
    newArr = newArr.concat(element.data.filter((item) => item._checked))
  })
  return newArr
}

Vue.prototype.testFun = function (params) {
  console.log(this.$store.state)
  console.log(params)
}
