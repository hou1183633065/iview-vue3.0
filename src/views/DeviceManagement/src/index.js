
import returnData from './data.config'
import HeadLine from '@/components/HeadLine/index'
import PageTurning from '@/components/PageTurning/index'
import { getTableList } from './api'
import {
  Table,
  Button,
  Select,
  Option,
  DatePicker,
  Modal,
  Form,
  FormItem,
  RadioGroup,
  Radio,
  Input
} from 'iview'
export default {
  components: {
    HeadLine,
    PageTurning,
    Table,
    Button,
    Select,
    Option,
    DatePicker,
    Modal,
    Form,
    FormItem,
    RadioGroup,
    Radio,
    iInput: Input
  },
  data () {
    return returnData
  },
  created () {
    this.getDeviceList(1)
  },
  methods: {
    handleAddDevice () {
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
        this.modalTitle = '修改设备'
        this.modalSubmitText = '保存'
      } else {
        newObj.name = ''
        newObj.email = ''
        newObj.gender = ''
        newObj.grade = ''
        this.modalTitle = '新增设备'
        this.modalSubmitText = '添加'
      }
      Object.assign(this.formValidate, newObj)
      this.modalShow = true
    },
    handleLookMore (index) {
      console.log(index)
    },
    handlePageChange (page) {
      this.pageCurrent = page
      this.getDeviceList(page)
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
    async getDeviceList (page) {
      this.deviceLoading = true
      if (!this.dataHasPage(this.allPageData, page)) {
        let { success, resData } = await getTableList(page)
        if (success) {
          this.plusDataList(this.allPageData, resData, page)
        }
      }
      this.deviceList = this.getIndexData(this.allPageData, page)
      this.deviceLoading = false
    }
  }
}
