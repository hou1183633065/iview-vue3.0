const mutations = {
  plusDataList (state, option) {
    let hasPage = state.storeDataList.some((item) => {
      return item.page === option.page
    })
    if (!hasPage) {
      state.storeDataList.push(option)
    }
  },
  toogleChecked (state, option) {
    let targetData = state.storeDataList.find((item) => {
      return item.page === option.page
    })
    targetData.data.map((item) => {
      option.data.forEach(ele => {
        if (JSON.stringify(item) === JSON.stringify(ele)) {
          item._checked = option.checked
        }
      })
      return item
    })
  }
}

export default mutations
