
import returnData from './data.config'
import HeadLine from '@/components/HeadLine'
import {
  Row,
  Col,
  Table,
  Button,
  Cascader,
  DatePicker,
  Input,
  Icon,
  Page
} from 'iview'
import { getTableList, getProvince, getCity, getCounty } from './api'
import { cityDataformatter } from './index.controller'
export default {
  components: {
    HeadLine,
    iRow: Row,
    iCol: Col,
    Table,
    Button,
    Cascader,
    DatePicker,
    iInput: Input,
    Icon,
    Page
  },
  data () {
    return returnData
  },
  mounted () {
    this.getAlarmList(1)
    this.getVideoList(1)
    this.getProvinceList()
  },
  methods: {
    handleLookMore (index) {
      console.log(index)
    },
    handleDownLoad (index) {
      console.log(index)
    },
    handleFirstPage () {
      console.log('handleFirstPage')
      this.pageCurrent = 1
      this.getVideoList(this.pageCurrent)
    },
    handleLastPage () {
      console.log('handleLastPage')
      this.pageCurrent = Math.floor(this.pageTotal / this.pageSize)
      this.getVideoList(this.pageCurrent)
    },
    pageChange (index) {
      console.log('pageChange')
      this.pageCurrent = index
      this.getVideoList(this.pageCurrent)
    },
    async provinceLoadData (item, callback) {
      console.log(item)
      item.loading = true
      if (item.grade === 'province') {
        item.children = await this.getCityList(item.value)
      } else if (item.grade === 'city') {
        item.children = await this.getCountyList(item.value)
      }
      item.loading = false
      callback()
    },
    async getAlarmList (page) {
      this.alarmLoading = true
      let { success, resData } = await getTableList(page)
      if (success) {
        this.alarmData = resData
        // console.log(resData)
      } else {
        console.log('请求失败')
      }
      this.alarmLoading = false
    },
    async getVideoList (page) {
      this.videoLoading = true
      let { success, resData } = await getTableList(page)
      if (success) {
        this.videoData = resData
        // console.log(resData)
      } else {
        console.log('请求失败')
      }
      this.videoLoading = false
    },
    async getProvinceList () {
      let { success, resData } = await getProvince()
      if (success) {
        this.provinceData = cityDataformatter(resData, 'province', true)
        // console.log(resData)
      } else {
        console.log('请求失败')
      }
    },
    async getCityList (zipCode) {
      let { success, resData } = await getCity(zipCode)
      if (success) {
        return cityDataformatter(resData, 'city', true)
      } else {
        console.log('请求失败')
        return []
      }
    },
    async getCountyList (zipCode) {
      let { success, resData } = await getCounty(zipCode)
      if (success) {
        console.log(resData)
        return cityDataformatter(resData, 'county')
      } else {
        console.log('请求失败')
        return []
      }
    }
  }
}
