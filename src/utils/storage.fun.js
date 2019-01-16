
import Vue from 'vue'

// 本地sessionStorage存储封装
Vue.prototype.sessionStorage = {
  period: 1000 * 60 * 10,
  // 定义一个时间戳作为版本过期
  timestamp: function () {
    return Date.parse(new Date())
  },
  // 查看当前键值存储数据是否为空
  resultIsNull: function (storageKey) {
    let storage = window.sessionStorage.getItem(storageKey)
    if (storage === null || storage === 'null' || storage === '' || storage === '{}' || storage === '[]') {
      return true
    } else {
      return false
    }
  },
  // 根据timestamp检查当前数据是否过期
  isExpired: function (times) {
    if (this.timestamp() - times > this.period) {
      return true
    } else {
      return false
    }
  },
  // 设置sessionStorage数据
  setItem: function (storageKey, storageData) {
    window.sessionStorage.setItem(storageKey, JSON.stringify({
      _Version: this.timestamp(),
      _Data: storageData
    }))
  },
  // 拿取sessionStorage数据
  getItem: function (storageKey) {
    let storageData = JSON.parse(window.sessionStorage.getItem(storageKey))
    // 检查键值对数据是否存在
    if (this.resultIsNull(storageKey)) {
      return null
    }

    // 检查数据是否过期
    if (!this.isExpired(storageData._Version)) {
      // 不过期，拿出来返回
      return storageData._Data
    } else {
      this.removeItem(storageKey)
      return null
    }
  },
  // 根据page去更新或者加入更新sessionStorage数据
  plusItem: function (storageKey, storageData) {
    // 存储为空则存入数组
    if (this.resultIsNull(storageKey)) {
      this.setItem(storageKey, [storageData])
    } else {
      // 存储不为空则拿出存储的数组
      let storageTargetArr = this.getItem(storageKey)
      // 存储数组中有page相同数据
      if (storageTargetArr.some((item) => item.page === storageData.page)) {
        Object.assign(storageTargetArr, storageData)
        // 过滤筛选出page相同的对象，只有一条数据
        let storageTarget = storageTargetArr.filter((item) => {
          return item.page === storageData.page
        })[0]
        // 合并两个对象的属性，后来者更新
        Object.assign(storageTarget, storageData)
      } else {
        // 存储数据中没有相同项数据，则向存储的数组中加入新数据
        storageTargetArr.push(storageData)
      }
      this.setItem(storageKey, storageTargetArr)
    }
  },
  // 移除其中某一项的sessionStorage
  removeItem: function (storageKey) {
    window.sessionStorage.removeItem(storageKey)
  },
  // 清除所有的sessionStorage
  clear: function () {
    window.sessionStorage.clear()
  }
}
