<template>
  <div class="common-header">
    <a href="/" class="common-header-logo">
      <img src="@/asset/images/logo.png" alt="" />
      Paracraft
    </a>
    <div class="common-header-menus">
      <a :class="{'active': routerName === 'HomePage'}" href="/">About</a>
      <a href="http://paracraft.keepwork.com/download" target="_blank">Download</a>
      <a :class="{'active': routerName === 'Contact'}" href="/contact">Contact</a>
    </div>
    <div class="common-header-dropdown">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="common-header-dropdown-target" src="@/asset/images/menu.svg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <a :class="{'active': routerName === 'HomePage'}" href="/">About</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="http://paracraft.keepwork.com/download" target="_blank">Download</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a :class="{'active': routerName === 'Contact'}" href="/contact">Contact</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonHeader',
  computed: {
    routerName() {
      return this.$route.name
    }
  }
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
    font-size: 24px;
    font-weight: bold;
    display: block;
    cursor: pointer;
    text-decoration: none;
    img {
      cursor: pointer;
    }
    &:hover {
      color: #198ee9;
    }
  }
  &-menus {
    flex: 1;
    text-align: right;
    a {
      font-size: 18px;
      color: #333;
      display: inline-block;
      margin-right: 44px;
      text-decoration: none;
      &.active {
        color: #198ee9;
      }
      &:hover {
        color: #198ee9;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &-dropdown {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  .common-header {
    padding: 0 16px;
  }
}
@media screen and (max-width: 560px) {
  .common-header {
    &-menus {
      a {
        margin-right: 16px;
      }
    }
  }
}
@media screen and (max-width: 440px) {
  .common-header {
    &-menus {
      display: none;
    }
    &-dropdown {
      flex: 1;
      text-align: right;
      display: initial;
      padding-right: 8px;
      /deep/.el-dropdown {
        font-size: 24px;
      }
      &-target {
        width: 24px;
        height: auto;
        position: relative;
        top: -4px;
      }
    }
  }
}
</style>
