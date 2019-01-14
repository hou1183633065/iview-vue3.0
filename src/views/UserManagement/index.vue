<template>
  <div class="UserManagement">
    <head-line title="用户管理">
      <div slot="rightContent">
        <Button type="primary" @click="handleAddUser">新增</Button>
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
          <p>用户名称：</p>
          <i-input v-model="notesTime" placeholder="请输入" />
          <Button type="primary" class="ml50" @click="handleSearch">搜索</Button>
        </div>
      </div>
    </div>

    <Table
        class="mt20"
        type="selection"
        border
        ref="table"
        :loading="userLoading"
        :columns="userColumns"
        :data="dataList"
        @on-select="handleSelectIndex"
        @on-select-cancel="handleCancelIndex"
        @on-select-all="handleSelectAll"
        @on-select-all-cancel="handleCanceAll"
        @on-row-dblclick="handleEditRow">
      <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
          <Button class="active-color" type="text" @click="handleLookMore(index)">查看</Button>
          <Button class="active-color" type="text" @click="handleDownLoad(index)">下载</Button>
      </template>
    </Table>

    <div class="flex row justify-between align-center mt30">
       <Button type="text" @click="handleDownLoadAll" class="active-color">批量下载</Button>
       <page-turning :pageTotal="100" @on-page-change="handlePageChange"></page-turning>
    </div>

    <Modal
        v-model="modalShow"
        :title="modalTitle"
        width="520"
        footer-hide>
        <div class="modal-content mt10">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="姓名" prop="name">
                <i-input v-model="formValidate.name" placeholder="请输入"></i-input>
            </FormItem>
            <FormItem label="电子邮箱" prop="email">
                <i-input v-model="formValidate.email" placeholder="请输入"></i-input>
            </FormItem>
            <FormItem label="用户类型" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio v-for="(item, index) in userTypeList" :key="index" :label="item.value">{{item.label}}</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="权限等级" prop="grade">
                <Select v-model="formValidate.grade" placeholder="权限等级">
                    <Option v-for="(item, index) in userGradeList" :key="index" :value="item.value">{{item.label}}</Option>
                </Select>
            </FormItem>
            <FormItem class="form-footer-content">
                <Button @click="handleCancel">取消</Button>
                <Button type="primary" @click="handleSubmit('formValidate')" class="ml10">{{modalSubmitText}}</Button>
            </FormItem>
        </Form>
        </div>
    </Modal>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" src="./src/style.scss"></style>
