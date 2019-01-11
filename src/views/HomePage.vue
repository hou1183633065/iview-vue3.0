
<template>
    <div class="HomePage">
      <Layout>
        <Header>
          <div class="header-logo">
            <img src="@/assets/logo.png">
            <span class="ml20 size22">视频管理平台</span>
          </div>
          <div class="header-ul">
            <ul>
              <li>
                <Icon type="md-contact" size="25" />
                <span>铲平运营</span>
              </li>
              <li>
                <span>设置</span>
              </li>
            </ul>
          </div>
        </Header>
        <Layout>
            <Sider hide-trigger width="260">
              <Menu width="260" name="1">
                <MenuItem  name="1"><Icon type="md-desktop" size="16" />文章管理</MenuItem>
                <MenuItem  name="2"><Icon type="md-person" size="16" />文章管理</MenuItem>
                <MenuItem  name="3"><Icon type="md-heart" size="16" />文章管理</MenuItem>
                <MenuItem  name="4"><Icon type="md-heart" size="16" />文章管理</MenuItem>
                <MenuItem  name="5"><Icon type="md-heart" size="16" />文章管理</MenuItem>
                <MenuItem  name="6"><Icon type="md-heart" size="16" />文章管理</MenuItem>
                <MenuItem  name="7"><Icon type="md-heart" size="16" />文章管理</MenuItem>
              </Menu>
            </Sider>
            <Layout>
                <Content>
                  <div class="content">
                    <router-view></router-view>
                  </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>

    </Layout>
    </div>
</template>
<script>
// @ is an alias to /src
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
  }
}
</script>
<style lang="scss" scoped>
.HomePage {
  height: 100%;
  .ivu-layout {
    height: 100%;
    &-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
      height: 70px;
      padding: 0 30px;
      background: #108ee9;
      color: #ffffff;
      .header-logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        img {
          align-self: center;
          width: 40px;
          span {
            color: #ffffff;
          }
        }
      }
      .header-ul{
        ul{
          display: flex;
          flex-direction: row;
          align-content: center;
          height: 100%;
          li{
            display: inline-block;
            margin-left: 30px;
            font-size: 18px;
            .ivu-icon{
              margin-right: 15px;
            }
          }
        }
      }
    }
    &-sider {
      height: 100%;
      background: #252a2e;
      .ivu-menu {
        color: #ffffff;
        &-item {
          height: 50px;
          text-align: left;
          & > i {
            margin-right: 24px;
          }
          &:hover {
            color: #ffffff;
            background: #0d7ac9;
          }
        }
        &-light {
          background: none;
          &.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
            color: #ffffff;
            background: #0d7ac9;
          }
        }
      }
    }
    &-content {
      box-sizing: border-box;
      padding: 10px;
      .content{
        background: #FFFFFF;
        border-radius: 2px;
      }
    }
  }
}
</style>
