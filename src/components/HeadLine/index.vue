<template>
  <div class="Headline flex row justify-between align-center ptb25">
    <div class="title flex row justify-start align-center">
      <p class="size18 weight400 self-start">{{ title }}</p>
      <div class="subtitle ml20 size12">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <div class="self-end">
      <slot name="rightContent"></slot>
    </div>
  </div>
</template>

<script src="./src/index.js"></script>

<style lang="scss" scoped src="./src/style.scss"></style>
