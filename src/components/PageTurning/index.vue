<template>
  <div class="PageTurning">
    <div class="flex row justify-end align-center">
      <span class="mr20">第{{ page }}/{{ lastPage }}页</span>
      <Button class="mr20" :disabled="page===1" @click="handleFirstPage">首页</Button>
      <Page :current="page" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" />
      <Button class="ml20" :disabled="page===lastPage" @click="handleLastPage">尾页</Button>
    </div>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
