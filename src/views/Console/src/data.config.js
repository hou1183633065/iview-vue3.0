const returnData = {
  pageCurrent: 1,
  pageSize: 10,
  pageTotal: 120,
  alarmColumns: [
    {
      title: '地区',
      align: 'center',
      key: 'province'
    },
    {
      title: '车牌号',
      align: 'center',
      key: 'carId'
    },
    {
      title: '设备号',
      align: 'center',
      key: 'deviceId'
    },
    {
      title: '报警类型',
      align: 'center',
      key: 'errorType'
    },
    {
      title: '文件数量',
      align: 'center',
      key: 'fileNum'
    },
    {
      title: '文件大小',
      align: 'center',
      key: 'fileSize'
    },
    {
      title: '文件时长',
      align: 'center',
      key: 'fileTime'
    },
    {
      title: '操作',
      align: 'center',
      slot: 'action',
      width: 150
    }
  ],
  videoColumns: [
    {
      type: 'selection',
      align: 'center',
      width: 60
    },
    {
      title: '地区',
      align: 'center',
      key: 'province'
    },
    {
      title: '车牌号',
      align: 'center',
      key: 'carId'
    },
    {
      title: '设备通道号',
      align: 'center',
      key: 'deviceId'
    },
    {
      title: '记录原因',
      align: 'center',
      key: 'errorReason'
    },
    {
      title: '记录时间',
      align: 'center',
      key: 'creatTime'
    },
    {
      title: '操作',
      align: 'center',
      slot: 'action',
      width: 150
    }
  ],
  errorReason: '',
  errorDataList: [
    {
      value: 'type1',
      label: '客车超员'
    },
    {
      value: 'type2',
      label: '设备故障'
    },
    {
      value: 'type3',
      label: '信号丢失'
    },
    {
      value: 'type4',
      label: '司机走丢'
    }
  ],
  alarmData: [],
  alarmLoading: false,
  videoLoading: false
}

export default returnData
