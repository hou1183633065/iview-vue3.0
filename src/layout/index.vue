
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
<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
