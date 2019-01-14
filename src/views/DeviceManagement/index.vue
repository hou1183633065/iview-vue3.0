<template>
  <div class="DeviceManagement">

    <head-line title="设备管理">
      <div slot="subtitle"></div>
      <div slot="rightContent">
        <Button type="primary" @click="handleAddDevice">新增</Button>
      </div>
    </head-line>

    <div class="DeviceManagement-alarm-count input-row text-left size12 plr40">
      <div class="flex row justify-start align-center wrap">
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <p class="label-color">入网时间：</p>
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="开始时间"></DatePicker>—
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="结束时间"></DatePicker>
        </div>
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <Select class="mr40" v-model="errorReason" placeholder="设备类型">
              <Option v-for="item in errorDataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="errorReason" placeholder="设备属性">
              <Option v-for="item in errorDataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
       <div class="flex row justify-start align-center mt10 mb10">
          <Button type="primary">搜索</Button>
        </div>
      </div>
    </div>

    <Table
      border
      class="mt20"
      ref="videoCassetteTable"
      type="selection"
      :loading="deviceLoading"
      :columns="deviceColumns"
      :data="deviceList"
      @on-row-dblclick="handleEditRow">
      <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
          <Button class="active-color" type="text" @click="handleLookMore(index)">查看</Button>
      </template>
    </Table>

    <page-turning class="mt30" :pageTotal="100" @on-page-change="handlePageChange"></page-turning>

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
