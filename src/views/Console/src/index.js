
import returnData from './data.config'
import HeadLine from '@/components/HeadLine/index'
import PageTurning from '@/components/PageTurning/index'
import CascaderCity from '@/components/CascaderCity/index'
import { getTableList } from './api'
import {
  Row,
  Col,
  Table,
  Button,
  Select,
  Option,
  DatePicker,
  Input,
  Icon,
  Notice
} from 'iview'
export default {
  components: {
    HeadLine,
    PageTurning,
    CascaderCity,
    iRow: Row,
    iCol: Col,
    Table,
    Button,
    Select,
    Option,
    DatePicker,
    iInput: Input,
    Icon
  },
  data () {
    return returnData
  },
  created () {
    this.getAlarmList(1)
    this.getVideoList(1)
  },
  methods: {
    handleCityCascaderChange (params) {
      console.log(params)
    },
    handleEditRow (currentRow) {
      console.log(currentRow)
    },
    handleLookMore (index) {
      console.log(index)
    },
    handleSelectIndex (selection) {
      this.sendCheckedData(this.allPageData, selection, this.pageCurrent, true)
    },
    handleCancelIndex (selection) {
      this.sendCheckedData(this.allPageData, selection, this.pageCurrent, false)
    },
    handleSelectAll (selection) {
      this.sendCheckedData(this.allPageData, selection, this.pageCurrent, true)
    },
    handleCanceAll (selection) {
      this.sendCheckedData(this.allPageData, selection, this.pageCurrent, false)
    },
    handleDownLoad (loadIndex) {
      this.exportCsv('videoCassetteTable', {
        filename: this.videoList[loadIndex].creatTime,
        columns: this.videoColumns.filter((item, index, self) => index > 0 && index < self.length),
        data: this.videoList.filter((item, index, self) => index === loadIndex)
      })
    },
    handleDownLoadAll () {
      let newArr = this.getCheckedData(this.allPageData)
      if (!newArr.length) {
        Notice.error({
          title: '没有勾选信息，暂不可批量下载！'
        })
        return false
      }
      this.exportCsv('videoCassetteTable', {
        filename: '录像导出表',
        columns: this.videoColumns.filter((item, index, self) => index > 0 && index < self.length),
        data: newArr.filter((item, index, self) => index > 0 && index < self.length)
      })
    },
    handlePageChange (page) {
      this.pageCurrent = page
      this.getVideoList(page)
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
      if (!this.dataHasPage(this.allPageData, page)) {
        let { success, resData } = await getTableList(page)
        if (success) {
          this.plusDataList(this.allPageData, resData, page)
        }
      }
      this.videoList = this.getIndexData(this.allPageData, page)
      this.videoLoading = false
    }
  }
}
