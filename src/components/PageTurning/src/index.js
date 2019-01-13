
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
  computed: {
    lastPage () {
      return Math.ceil(this.pageTotal / this.pageSize)
    }
  },
  methods: {
    handleFirstPage () {
      this.page = 1
      this.$emit('on-page-change', 1)
    },
    handleLastPage () {
      this.page = this.lastPage
      this.$emit('on-page-change', this.lastPage)
    },
    pageChange (index) {
      this.page = index
      this.$emit('on-page-change', index)
    }
  }
}
