import Mock from 'mockjs'
import { randomWord, ObjectTransformArray } from './mock.fun'
import chinaList from './area'
const Random = Mock.Random
// Mock响应模板
Mock.setup({
  timeout: '400-1000'
})

Mock.mock('/tableList', 'post', function (options) {
  options = JSON.parse(options.body)
  // console.log(options.body)
  return Mock.mock({
    'data|10': [{
      'name': '@cname',
      'id|+1': 88,
      'userId': '@guid',
      'email': '@email(muheda.com)',
      'grade': 'type' + '@natural(1, 4)',
      'gender': 'type' + '@natural(1, 4)',
      'province': '@province',
      // '_checked': '@boolean',
      'carId': Random.province().slice(0, 1) + Random.upper(Random.word(1)) + '-' + '@zip',
      'deviceId': randomWord(8, true),
      'errorType': Random.pick(['异常驾驶行为', '客车超员']),
      'errorReason': '@cword(4)',
      'fileNum': '@natural(1, 200)',
      'fileSize': '@natural(1, 10000)',
      'fileTime': '@date(HH:mm:ss)',
      'creatTime': '@date(yyyy-MM-dd HH:mm:ss)',
      'status': Random.pick(['在线', '维护', '注销'])
    }]
  })
})

Mock.mock('/province', 'post', function () {
  return Mock.mock({
    data: ObjectTransformArray(chinaList.province_list)
  })
})

Mock.mock('/city', 'post', function (options) {
  options = JSON.parse(options.body)
  return Mock.mock({
    data: ObjectTransformArray(chinaList.city_list).filter((item) => {
      return item.value.slice(0, 2) === options.code.slice(0, 2)
    })
  })
})

Mock.mock('/county', 'post', function (options) {
  options = JSON.parse(options.body)
  return Mock.mock({
    data: ObjectTransformArray(chinaList.county_list).filter((item) => {
      return item.value.slice(2, 4) === options.code.slice(2, 4)
    })
  })
})

Mock.mock('/device', 'post', function (options) {
  let newArr = []
  for (let i = 0; i < 10; i++) {
    let obj = { 'aa': '11', 'bb': '22', 'cc': '33', 'dd': '44' }
    let newObj = {
      'name': '@cname', // 中文名称
      'id|+1': 88, // 属性值自动加 1，初始值为88
      'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
      'birthday': '@date("yyyy-MM-dd")', // 日期
      'city': '@city(true)', // 中国城市
      'color': '@color', // 16进制颜色
      'isMale|1': true, // 布尔值
      'isFat|1-2': true, // true的概率是1/3
      'fromObj|2': obj, // 从obj对象中随机获取2个属性
      'fromObj2|1-3': obj, // 从obj对象中随机获取1至3个属性
      'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
      'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
      'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    }
    newArr.push(newObj)
  }
  return Mock.mock({
    data: newArr
  })
})
