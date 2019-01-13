const returnData = {
  pageCurrent: 1,
  pageSize: 10,
  pageTotal: 120,
  allPageData: [],
  dataList: [],
  nowSelectData: {},
  userColumns: [
    {
      type: 'selection',
      align: 'center',
      width: 60
    },
    {
      title: '地区',
      align: 'center',
      tooltip: true,
      key: 'province'
    },
    {
      title: '车牌号',
      align: 'center',
      tooltip: true,
      key: 'carId'
    },
    {
      title: '设备通道号',
      align: 'center',
      tooltip: true,
      key: 'deviceId'
    },
    {
      title: '记录原因',
      align: 'center',
      tooltip: true,
      key: 'errorReason'
    },
    {
      title: '记录时间',
      align: 'center',
      tooltip: true,
      key: 'creatTime'
    },
    {
      title: '确认人',
      align: 'center',
      key: 'name',
      width: 100
    },
    {
      title: '操作',
      align: 'center',
      slot: 'action',
      width: 150
    }
  ],
  userLoading: false,
  userTypeList: [
    {
      value: 'type1',
      label: '系统管理员'
    },
    {
      value: 'type2',
      label: '监控人员'
    },
    {
      value: 'type3',
      label: '跨平台使用人员'
    },
    {
      value: 'type4',
      label: '政府平台使用人员'
    }
  ],
  userType: '',
  userGradeList: [
    {
      value: 'type1',
      label: '一级权限'
    },
    {
      value: 'type2',
      label: '二级权限'
    },
    {
      value: 'type3',
      label: '三级权限'
    },
    {
      value: 'type4',
      label: '四级权限'
    }
  ],
  userGrade: '',
  notesTime: '',
  modalShow: false,
  modalTitle: '',
  modalSubmitText: '',
  formValidate: {
    name: '',
    email: '',
    gender: '',
    grade: ''
  },
  ruleValidate: {
    name: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
    ],
    gender: [
      { required: true, message: '请选择用户类型', trigger: 'sumit' }
    ],
    grade: [
      { required: true, message: '请选择用户权限等级', trigger: 'sumit' }
    ]
  }
}

export default returnData
