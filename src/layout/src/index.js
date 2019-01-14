import menuItemRoutes from '@/router/menuItemRoutes'
import {
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Menu,
  MenuItem,
  Icon,
  Tooltip
} from 'iview'
export default {
  name: 'HomePage',
  components: {
    Layout,
    Header,
    Sider,
    Content,
    Footer,
    Menu,
    MenuItem,
    Icon,
    Tooltip
  },
  data () {
    return {
      menuItems: [],
      activeName: 0,
      sliderWidth: 160
    }
  },
  created () {
    this.menuItems = menuItemRoutes
    menuItemRoutes.forEach((ele, index) => {
      if (this.$route.path === ele.path) {
        this.activeName = index
      }
    })
  },
  mounted () {
    this.$nextTick(() => {
      // 根据浏览器宽度匹配左边slide是否显示文字
      let domWidth = document.body.clientWidth
      if (domWidth > 1500) {
        this.$store.commit('toogleSlideStatus', true)
      } else {
        this.$store.commit('toogleSlideStatus', false)
      }
    })
  },
  computed: {},
  methods: {
    handleLogoBtn () {
      this.activeName = 0
      this.$router.push('/')
    },
    handleSelectMenu (name) {
      this.activeName = name
    }
  }
}
