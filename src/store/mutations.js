const mutations = {
  addDataList (state, option) {
    if (!state.dataList.length) {
      state.dataList.push(option)
    } else {
      state.dataList.forEach(element => {
        if (element.page !== option.page) {
          state.dataList.push(option)
        }
      })
    }
    // state.dataList = state.dataList.filter((item, index, self)=>{
    //   console.log(item, index, self)
    //   return item
    // })
    // state.dataList.push(data)
  },
  addExportCsv (state, data) {
    console.log(data)
    // state.exportCsv++
  },
  removeExportCsv (state, data) {
    console.log(data)
    // state.exportCsv++
  },
  addExportCsvAll (state, data) {
    state.exportCsvList = data
    // state.exportCsv++
  },
  removeExportCsvAll (state) {
    state.exportCsvList = []
  }
}

export default mutations
