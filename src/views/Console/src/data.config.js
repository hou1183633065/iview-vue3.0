const returnData = {
  pageCurrent: 1,
  pageSize: 10,
  pageTotal: 120,
  columns12: [
    {
      title: 'Name',
      align: 'center',
      slot: 'name'
    },
    {
      title: 'Age',
      align: 'center',
      key: 'age'
    },
    {
      title: 'Address',
      align: 'center',
      key: 'address'
    },
    {
      title: '操作',
      align: 'center',
      slot: 'action',
      width: 150
    }
  ],
  data6: [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park'
    }
  ],
  columns4: [
    {
      type: 'selection',
      align: 'center',
      width: 60
    },
    {
      title: 'Name',
      align: 'center',
      key: 'name'
    },
    {
      title: 'Age',
      align: 'center',
      key: 'age'
    },
    {
      title: 'Address',
      align: 'center',
      key: 'address'
    },
    {
      title: '操作',
      align: 'center',
      slot: 'action',
      width: 150
    }
  ],
  data1: [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }
  ]
}

export default returnData
