
import { Page, Button } from 'iview'
export default {
  components: {
    Page,
    Button
  },
  props: {
    pageTotal: {
      type: Number,
      required: false,
      default: 1
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    handleFirstPage () {
      this.page = 1
      this.$emit('on-page-change', 1)
    },
    handleLastPage () {
      let lastPage = Math.ceil(this.pageTotal / this.pageSize)
      this.page = lastPage
      this.$emit('on-page-change', lastPage)
    },
    pageChange (index) {
      this.page = index
      this.$emit('on-page-change', index)
    }
  }
}
