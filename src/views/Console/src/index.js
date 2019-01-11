
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
import { getUser } from './api'
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
    this.getDataList(1)
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
    },
    handleLastPage () {
      console.log('handleLastPage')
      this.pageCurrent = Math.floor(this.pageTotal / this.pageSize)
    },
    pageChange (index) {
      console.log('pageChange')
      this.pageCurrent = index
    },
    async getDataList (page) {
      let { success, resData } = await getUser(page)
      if (success) {
        console.log(resData)
      } else {
        console.log('请求失败')
      }
    }
  }
}
