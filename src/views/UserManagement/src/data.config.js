const returnData = {
  pageCurrent: 1,
  pageSize: 10,
  pageTotal: 120,
  userColumns: [
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
  userData: [],
  userLoading: false,
  userTypeList: [
    {
      value: '11111111',
      label: '11111111'
    },
    {
      value: '22222222',
      label: '22222222'
    },
    {
      value: '33333333',
      label: '33333333'
    },
    {
      value: '44444444',
      label: '44444444'
    }
  ],
  userType: '',
  userGradeList: [
    {
      value: 'AAAAAAAA',
      label: 'AAAAAAAA'
    },
    {
      value: 'BBBBBBBB',
      label: 'BBBBBBBB'
    },
    {
      value: 'CCCCCCCC',
      label: 'CCCCCCCC'
    },
    {
      value: 'DDDDDDDD',
      label: 'DDDDDDDD'
    }
  ],
  userGrade: '',
  notesTime: '',
  modalShow: true,
  formValidate: {
    name: '',
    mail: '',
    city: '',
    gender: '',
    interest: [],
    date: '',
    time: '',
    desc: ''
  },
  ruleValidate: {
    name: [
      { required: true, message: 'The name cannot be empty', trigger: 'blur' }
    ],
    mail: [
      { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
      { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
    ],
    city: [
      { required: true, message: 'Please select the city', trigger: 'change' }
    ],
    gender: [
      { required: true, message: 'Please select gender', trigger: 'change' }
    ],
    interest: [
      { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
      { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
    ],
    date: [
      { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
    ],
    time: [
      { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
    ],
    desc: [
      { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
      { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
    ]
  }
}

export default returnData
