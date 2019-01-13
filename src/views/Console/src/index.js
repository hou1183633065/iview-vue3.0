
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
  computed: {
    videoData () {
      return this.getIndexData(this.pageCurrent)
    }
  },
  watch: {
    pageCurrent (newVal) {
      this.getVideoList(newVal)
    }
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
      this.sendStoreData(this.pageCurrent, selection, true)
    },
    handleCancelIndex (selection) {
      this.sendStoreData(this.pageCurrent, selection, false)
    },
    handleSelectAll (selection) {
      this.sendStoreData(this.pageCurrent, selection, true)
    },
    handleCanceAll (selection) {
      this.sendStoreData(this.pageCurrent, selection, false)
    },
    handleDownLoad (loadIndex) {
      this.exportCsv('videoCassetteTable', {
        filename: this.videoData[loadIndex].creatTime,
        columns: this.videoColumns.filter((item, index, self) => index > 0 && index < self.length),
        data: this.videoData.filter((item, index, self) => index === loadIndex)
      })
    },
    handleDownLoadAll () {
      let newArr = this.getCheckedData()
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
      if (!this.storeHasPage()) {
        let { success, resData } = await getTableList(page)
        if (success) {
          this.plusDataList(page, resData)
        }
      }
      this.videoLoading = false
    }
  }
}
