import menuItemRoutes from '@/router/menuItemRoutes'
import {
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Menu,
  MenuItem,
  Icon
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
    Icon
  },
  data () {
    return {
      menuItems: [],
      activeName: 0
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
