<template>
  <div class="content">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.content {
  flex: 1 1 auto;
  overflow: auto;
}
.container {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
</style>
