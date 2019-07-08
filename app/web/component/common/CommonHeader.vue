<template>
  <div class="common-header">
    <div class="common-header-logo">
      <img src="@/asset/images/logo.png" alt="" />
      Paracraft
    </div>
    <div class="common-header-menus">
      <a href="#">About</a>
      <a href="#" target="_blank">Download</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonHeader'
}
</script>
<style lang="scss" scoped>
.common-header {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  height: 56px;
  align-items: center;
  background-color: #fff;
  &-logo {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
  }
  &-menus {
    a {
      font-size: 18px;
      color: #333;
      display: inline-block;
      margin-right: 44px;
      text-decoration: none;
      &:hover {
        color: #198ee9;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
