<template>
  <div class="UserManagement">
    <h1>This is an UserManagement page{{count}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this.count = 100
    }, 3000)
  }
}
</script>
