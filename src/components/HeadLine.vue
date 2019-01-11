<template>
  <div class="Headline flex row justify-start align-center ptb25">
    <span class="size18 weight400">{{ title }}</span>
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
  span{
    margin-left: 8px;
    color: $headline-color;
  }
}
</style>
