
import returnData from './data.config'
import HeadLine from '@/components/HeadLine'
import {
  Table,
  Button,
  Select,
  Option,
  Input,
  Icon,
  Page,
  Modal,
  Form,
  FormItem,
  Row,
  Col,
  DatePicker,
  TimePicker,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox
} from 'iview'
import { getTableList } from './api'
export default {
  components: {
    HeadLine,
    Table,
    Button,
    Select,
    Option,
    iInput: Input,
    Icon,
    Page,
    Modal,
    Form,
    FormItem,
    Row,
    Col,
    DatePicker,
    TimePicker,
    RadioGroup,
    Radio,
    CheckboxGroup,
    Checkbox
  },
  data () {
    return returnData
  },
  mounted () {
    this.getUserList(1)
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
      this.getUserList(this.pageCurrent)
    },
    handleLastPage () {
      console.log('handleLastPage')
      this.pageCurrent = Math.floor(this.pageTotal / this.pageSize)
      this.getUserList(this.pageCurrent)
    },
    pageChange (index) {
      console.log('pageChange')
      this.pageCurrent = index
      this.getUserList(this.pageCurrent)
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    async getUserList (page) {
      this.userLoading = true
      let { success, resData } = await getTableList(page)
      if (success) {
        this.userData = resData
        console.log(resData)
      } else {
        console.log('请求失败')
      }
      this.userLoading = false
    }
  }
}
