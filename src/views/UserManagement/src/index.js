
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
    // console.log(this.$store.state.dataList)
    // this.$store.commit('removeExportCsvAll')
    // console.log(this.$refs.table)
    this.getUserList(1)
  },
  computed: {
    dataList () {
      let newData = []
      this.$store.state.dataList.forEach(element => {
        if (element.page === this.pageCurrent) {
          newData = element.data
        }
      })
      return newData
    }
  },
  watch: {
    pageCurrent (newVal) {
      this.getUserList(newVal)
    }
  },
  methods: {
    handleAddUser () {
      this.setModelData('add')
    },
    handleSearch () {
      console.log(this.dataList)
      console.log(this.$store.state.dataList)
    },
    setModelData (type, data) {
      let newObj = {}
      if (type === 'edit') {
        newObj = data
        this.modalTitle = '修改用户'
        this.modalSubmitText = '保存'
      } else {
        newObj.name = ''
        newObj.email = ''
        newObj.gender = ''
        newObj.grade = ''
        this.modalTitle = '新增用户'
        this.modalSubmitText = '添加'
      }
      Object.assign(this.formValidate, newObj)
      this.modalShow = true
    },
    handleSelectIndex (selection) {
      this.$store.commit('addExportCsv', {
        page: this.pageCurrent,
        data: this.toogleChecked(selection, true)
      })
    },
    handleCancelIndex (selection) {
      this.$store.commit('removeExportCsv', {
        page: this.pageCurrent,
        data: this.toogleChecked(selection, false)
      })
    },
    handleSelectAll (selection) {
      this.$store.commit('addExportCsvAll', {
        page: this.pageCurrent,
        data: this.toogleChecked(selection, true)
      })
    },
    handleCanceAll () {
      this.$store.commit('removeExportCsvAll')
    },
    toogleChecked (data, type) {
      type = type || false
      data.map((item) => {
        item._checked = type
        return item
      })
      return data
    },
    handleEditRow (currentRow) {
      this.setModelData('edit', {
        name: currentRow.name,
        email: currentRow.email,
        gender: currentRow.gender,
        grade: currentRow.grade
      })
    },
    handleLookMore (index) {
      console.log(this.dataList[index])
    },
    handleDownLoad (index) {
      console.log(this.dataList[index])
    },
    handleDownLoadAll () {
      console.log(this.$store.state.exportCsvList)
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
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formValidate)
          // this.$Message.success('Success!')
        }
      })
    },
    handleCancel () {
      this.modalShow = false
    },
    async getUserList (page) {
      this.userLoading = true
      if (!this.$store.state.dataList[page]) {
        let { success, resData } = await getTableList(page)
        if (success) {
          this.$store.commit('addDataList', {
            page: page,
            data: resData
          })
        } else {
          console.log('请求失败')
        }
      }
      this.userLoading = false
    }
  }
}
