<template>
  <div class="Headline flex row justify-start align-center ptb25">
    <p class="size18 weight400">{{ title }}</p>
    <div class="subtitle ml20 size12">
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/Theme.scss";
.Headline{
  &::before{
    display: inline-block;
    content: "";
    width: 4px;
    height: 22px;
    background: $headline-bg-color;
  }
  p{
    margin-left: 8px;
    color: $headline-color;
  }
  .subtitle{
    color: #999999;
  }
}
</style>
