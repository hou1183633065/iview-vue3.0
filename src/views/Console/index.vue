<template>
  <div class="Console">

    <head-line title="警报统计"></head-line>

    <i-row type="flex" justify="space-around" align="middle" class="Console-alarm-count">
        <i-col span="4">
          <p class="blue-font blue-font size16 weight600">1211</p>
          <p class="black size12 weight400">信号丢失</p>
        </i-col>
        <i-col span="4">
          <p class="blue-font blue-font size16 weight600">1211</p>
          <p class="black size12 weight400">信号丢失</p>
        </i-col>
        <i-col span="4">
          <p class="blue-font blue-font size16 weight600">1211</p>
          <p class="black size12 weight400">信号丢失</p>
        </i-col>
        <i-col span="4">
          <p class="blue-font blue-font size16 weight600">1211</p>
          <p class="black size12 weight400">信号丢失</p>
        </i-col>
        <i-col span="4">
          <p class="blue-font blue-font size16 weight600">1211</p>
          <p class="black size12 weight400">信号丢失</p>
        </i-col>
    </i-row>

    <head-line title="警报确认"></head-line>

    <Table border :columns="alarmColumns" :loading="alarmLoading" :data="alarmData">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button class="active-color" type="text" @click="handleLookMore(index)">查看</Button>
        </template>
    </Table>

    <head-line title="录像查看">
      <div slot="subtitle">
        <ul class="flex row justify-start">
          <li class="mr15">数量文件：1124</li>
          <li class="mr15">文件大小：1124M</li>
          <li class="mr15">文件时长：11:22:25</li>
        </ul>
      </div>
    </head-line>

    <div class="Console-alarm-count input-row text-left size12 plr40">
      <div class="flex row justify-start align-center wrap">
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <cascader-city
            class="mr40"
            placeholder="地区"
            grade="province"
            @on-cityCascader-change="handleCityCascaderChange">
          </cascader-city>
          <Select v-model="errorReason" placeholder="记录原因">
              <Option v-for="item in errorDataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="flex row justify-start align-center mr40 mt10 mb10">
          <p class="label-color">记录时间：</p>
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="开始时间"></DatePicker>—
          <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="结束时间"></DatePicker>
        </div>
       <div class="flex row justify-start align-center mt10 mb10">
          <p class="label-color">车牌号：</p>
          <i-input placeholder="Enter name">
            <div slot="prefix">
              <span class="mr5">京</span>
              <Icon type="ios-contact" />
            </div>
          </i-input>
          <Button type="primary" class="ml50">筛选</Button>
        </div>
      </div>
    </div>

    <Table
      border
      class="mt20"
      ref="videoCassetteTable"
      type="selection"
      :loading="videoLoading"
      :columns="videoColumns"
      :data="videoData"
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
       <div class="flex row justify-between align-center">
         <span class="mr20">第{{pageCurrent}}/{{pageTotal/pageSize}}页</span>
          <Button class="mr20" @click="handleFirstPage">首页</Button>
         <Page :current="pageCurrent" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" />
          <Button class="ml20" @click="handleLastPage">尾页</Button>
       </div>
    </div>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" src="./src/style.scss"></style>
