<template>
  <div class="paracraft">
    <common-header></common-header>
    <div class="paracraft-main">
      <router-view id="paracraft-page" />
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import router from './index.router'
import ElementUI, { Progress } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CommonHeader from '@/component/common/CommonHeader'
import CommonFooter from '@/component/common/CommonFooter'

Vue.use(Vuex)
Vue.use(ElementUI)

export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter
  },
  router
}
</script>

<style lang="scss">
@font-face {
  font-family: 'OpenSans';
  src: url('../../asset/fonts/opensans-semibold-webfont.eot'),
    url('../../asset/fonts/opensans-semibold-webfont.woff') format('woff'),
    url('../../asset/fonts/opensans-semibold-webfont.ttf') format('truetype'),
    url('../../asset/fonts/opensans-semibold-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'OpenSans-Semibold';
  src: url('../../asset/fonts/opensans-regular-webfont.eot'),
    url('../../asset/fonts/opensans-regular-webfont.woff') format('woff'),
    url('../../asset/fonts/opensans-regular-webfont.ttf') format('truetype'),
    url('../../asset/fonts/opensans-regular-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>

