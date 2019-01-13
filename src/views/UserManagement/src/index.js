
import returnData from './data.config'
import HeadLine from '@/components/HeadLine/index'
import PageTurning from '@/components/PageTurning/index'
import {
  Table,
  Button,
  Select,
  Option,
  Input,
  Modal,
  Form,
  FormItem,
  RadioGroup,
  Radio,
  Notice
} from 'iview'
import { getTableList } from './api'
export default {
  components: {
    HeadLine,
    PageTurning,
    Table,
    Button,
    Select,
    Option,
    iInput: Input,
    Modal,
    Form,
    FormItem,
    RadioGroup,
    Radio
  },
  data () {
    return returnData
  },
  created () {
    this.getUserList(1)
  },
  mounted () {
  },
  methods: {
    handleSearch () {
      // console.log(this.$store.state.storeDataList)
    },
    handleAddUser () {
      this.setModelData('add')
    },
    handleEditRow (currentRow) {
      this.setModelData('edit', {
        name: currentRow.name,
        email: currentRow.email,
        gender: currentRow.gender,
        grade: currentRow.grade
      })
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
    handleLookMore (index) {
      console.log(this.dataList[index])
    },
    handleDownLoad (loadIndex) {
      this.exportCsv('table', {
        filename: this.dataList[loadIndex].name,
        columns: this.userColumns.filter((item, index, self) => index > 0 && index < self.length),
        data: this.dataList.filter((item, index, self) => index === loadIndex)
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
      this.exportCsv('table', {
        filename: '用户导出表',
        columns: this.userColumns.filter((item, index, self) => index > 0 && index < self.length),
        data: newArr.filter((item, index, self) => index > 0 && index < self.length)
      })
    },
    handlePageChange (page) {
      this.pageCurrent = page
      this.getUserList(page)
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
      if (!this.dataHasPage(this.allPageData, page)) {
        let { success, resData } = await getTableList(page)
        if (success) {
          this.plusDataList(this.allPageData, resData, page)
        }
      }
      this.dataList = this.getIndexData(this.allPageData, page)
      this.userLoading = false
    }
  }
}
