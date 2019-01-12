<template>
  <div class="UserManagement">
    <head-line title="用户管理">
      <div slot="rightContent">
        <Button type="primary">新增</Button>
      </div>
    </head-line>

    <div class="UserManagement-alarm-count input-row text-left size12 plr40">
      <div class="flex row justify-start align-center wrap">
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <Select v-model="userType" placeholder="用户类型">
              <Option v-for="item in userTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <Select v-model="userGrade" placeholder="权限等级">
              <Option v-for="item in userGradeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <p>记录时间：</p>
          <Input v-model="notesTime" placeholder="请输入" />
          <Button type="primary" class="ml50">搜索</Button>
        </div>
      </div>
    </div>

    <Table border type="selection" :loading="userLoading" :columns="userColumns" :data="userData" class="mt20">
      <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
          <Button class="active-color" type="text" @click="handleLookMore(index)">查看</Button>
          <Button class="active-color" type="text" @click="handleDownLoad(index)">下载</Button>
      </template>
    </Table>

    <div class="flex row justify-between align-center mt30">
       <Button type="text" @click="handleDownLoad(index)" class="active-color">批量下载</Button>
       <div class="flex row justify-between align-center">
         <span class="mr20">第{{pageCurrent}}/{{pageTotal/pageSize}}页</span>
          <Button class="mr20" @click="handleFirstPage">首页</Button>
         <Page :current="pageCurrent" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" />
          <Button class="ml20" @click="handleLastPage">尾页</Button>
       </div>
    </div>

    <Modal
        v-model="modalShow"
        title="新增用户"
        width="520"
        ok-text="添加"
        cancel-text="取消">
        <div class="modal-content">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="姓名" prop="name">
                <i-input v-model="formValidate.name" placeholder="请输入"></i-input>
            </FormItem>
            <FormItem label="电子邮箱" prop="mail">
                <i-input v-model="formValidate.mail" placeholder="请输入"></i-input>
            </FormItem>
            <FormItem label="用户类型" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">系统管理员</Radio>
                    <Radio label="female">监控人员</Radio>
                    <Radio label="Run">跨平台使用人员</Radio>
                    <Radio label="Movie">政府平台使用人员</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="权限等级" prop="city">
                <Select v-model="formValidate.city" placeholder="权限等级">
                    <Option value="beijing">1111111</Option>
                    <Option value="shanghai">22222222</Option>
                    <Option value="shenzhen">33333333</Option>
                </Select>
            </FormItem>
            <FormItem label="Desc" prop="desc">
                <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
        </div>
    </Modal>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" src="./src/style.scss"></style>
