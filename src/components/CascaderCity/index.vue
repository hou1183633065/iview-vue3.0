<template>
  <div class="CascaderCity">
    <Cascader :placeholder="placeholder" :data="provinceData" :load-data="provinceLoadData"></Cascader>
  </div>
</template>

<script>
import { Cascader } from 'iview'
// import  from "./src/index.controller";
export default {
  name: 'CascaderCity',
  components: {
    Cascader
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '地区'
    },
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
  methods: {
    provinceLoadData (item, callback) {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
