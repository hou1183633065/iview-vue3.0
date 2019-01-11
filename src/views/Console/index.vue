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

    <Table border :columns="columns12" :data="data6">
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

    <i-row type="flex" justify="start" align="middle" class="Console-alarm-count input-row text-left size12 plr40">
        <i-col :lg="8" :md="12" :sm="20" :xs="22">
          <div class="flex row justify-start align-center mr40 mt10 mb10">
            <Cascader class="mr40"></Cascader>
            <Cascader></Cascader>
          </div>
        </i-col>
        <i-col :lg="8" :md="12" :sm="20" :xs="22">
          <div class="flex row justify-start align-center mr40 mt10 mb10">
            <p>记录时间：</p>
            <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="开始时间"></DatePicker>—
            <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="结束时间"></DatePicker>
          </div>
        </i-col>
        <i-col :lg="8" :md="12" :sm="20" :xs="22">
           <div class="flex row justify-start align-center mt10 mb10">
            <p>车牌号：</p>
            <i-input placeholder="Enter name">
              京<Icon type="ios-contact" slot="prefix" />
            </i-input>
            <Button type="primary" class="ml50">筛选</Button>
          </div>
        </i-col>
    </i-row>

    <Table border type="selection" :columns="columns4" :data="data1" class="mt20">
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
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" src="./src/style.scss"></style>
