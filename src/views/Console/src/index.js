
import returnData from './data.config'
import HeadLine from '@/components/HeadLine'
import CascaderCity from '@/components/CascaderCity/index'
import { getTableList } from './api'
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
export default {
  components: {
    HeadLine,
    CascaderCity,
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
  },
  methods: {
    handleCityCascaderChange (params) {
      console.log(params)
    },
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
    }
  }
}
