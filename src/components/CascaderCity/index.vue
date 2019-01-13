<template>
  <div class="CascaderCity">
    <Cascader
      :placeholder="placeholder"
      :data="provinceData"
      :load-data="provinceLoadData"
      @on-visible-change="handleVisibleChange"
      @on-change="handleChange"></Cascader>
  </div>
</template>

<script>
import { Cascader } from 'iview'
import * as $api from './src/api'
import * as $controller from './src/index.controller'
export default {
  name: 'CascaderCity',
  components: {
    Cascader
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '地区选择'
    },
    // grade值为等级联动值：province/city/county
    grade: {
      type: String,
      required: false,
      default: 'county'
    }
  },
  data () {
    return {
      provinceData: []
    }
  },
  created () {
    this.getProvinceList()
  },
  methods: {
    handleVisibleChange (visible) {
      if (visible && !this.provinceData.length) {
        this.getProvinceList()
      }
    },
    handleChange (value, selectedData) {
      this.$emit('on-cityCascader-change', {
        area: selectedData[selectedData.length - 1].__label,
        code: selectedData[selectedData.length - 1].__value
      })
    },
    async provinceLoadData (item, callback) {
      item.loading = true
      if (item.grade === 'province') {
        item.children = await this.getCityList(item.value)
      } else if (item.grade === 'city') {
        item.children = await this.getCountyList(item.value)
      }
      item.loading = false
      callback()
    },
    async getProvinceList () {
      let { success, resData } = await $api.getProvince()
      if (success) {
        this.provinceData = $controller.cityDataformatter(resData, 'province', this.grade)
      } else {
        this.provinceData = []
      }
    },
    async getCityList (zipCode) {
      let { success, resData } = await $api.getCity(zipCode)
      if (success) {
        return $controller.cityDataformatter(resData, 'city', this.grade)
      } else {
        return []
      }
    },
    async getCountyList (zipCode) {
      let { success, resData } = await $api.getCounty(zipCode)
      if (success) {
        return $controller.cityDataformatter(resData, 'county', this.grade)
      } else {
        return []
      }
    }
  }
}
</script>
