
<template>
    <div class="HomePage">
      <Layout>
        <Header>
          <div class="header-logo">
            <img src="@/assets/logo.png" @click="handleLogoBtn">
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
              <Menu width="260" :active-name="activeName" @on-select="handleSelectMenu">
                <MenuItem
                  v-for="(item, index) in menuItems"
                  :key="index"
                  :name="index"
                  :to="item.path"
                  >
                  <Icon :type="item.meta.icon" size="16" />
                  <span>{{item.meta.title}}</span>
                </MenuItem>
              </Menu>
            </Sider>
            <Layout>
                <Content>
                  <div class="content">
                   <keep-alive>
                      <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                  </div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>

    </Layout>
    </div>
</template>
<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
