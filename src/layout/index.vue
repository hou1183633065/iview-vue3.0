
<template>
    <div class="HomePage full-height">
      <Layout class="full-height">
        <Header class="flex row justify-between align-center header-bg">
          <div class="header-logo flex row justify-start align-center">
            <img class="pointer self-center" src="@/assets/logo.png" @click="handleLogoBtn">
            <span class="ml20 size22">视频管理平台</span>
          </div>
          <div class="header-ul">
            <ul class="flex row align-center size18">
              <li  class="pointer">
                <Icon class="mr15" type="md-contact" size="25" />
                <span>操作人：张三</span>
              </li>
            </ul>
          </div>
        </Header>
        <Layout class="full-height">
            <Sider hide-trigger :width="$store.state.slideTextShow?160:70" class="full-height slide-bg">
              <Menu mode="vertical" width="auto" :active-name="activeName" @on-select="handleSelectMenu">
                <MenuItem
                  v-for="(item, index) in menuItems"
                  :key="index"
                  :name="index"
                  :to="item.path"
                  class="text-left"
                  >
                  <Tooltip :content="item.meta.title" placement="right" :disabled="$store.state.slideTextShow">
                    <Icon :type="item.meta.icon" size="16" />
                  </Tooltip>
                  <span v-if="$store.state.slideTextShow">{{item.meta.title}}</span>
                </MenuItem>
              </Menu>
            </Sider>
            <Layout>
                <Content class="padding10">
                  <div class="content plr35">
                   <keep-alive>
                      <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                  </div>
                </Content>
                <Footer class="none">Footer</Footer>
            </Layout>
        </Layout>

    </Layout>
    </div>
</template>
<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
