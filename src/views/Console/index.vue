<template>
  <div class="Console">
    <h1>This is an Console page{{count1}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count1: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this.count1 = 100
    }, 3000)
  }
}
</script>
