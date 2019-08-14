<template>
  <div class="paracraft">
    <div class="paracraft-header-wrap">
      <common-header class="paracraft-header"></common-header>
    </div>
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
  mounted() {
    const language =
      navigator.appName === 'Netscape'
        ? navigator.language
        : navigator.browserLanguage
    if (language.indexOf('zh') === -1) {
      this.$confirm('Do you switch to English ?', '', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      })
        .then(res => {
          window.location.href = 'http://pa.keepwork.com/'
        })
        .catch(e => {
          console.error(e)
        })
    }
  },
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
.paracraft {
  &-header-wrap {
    min-height: 56px;
  }
  &-header {
    height: 56px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    box-shadow: 10px 0 10px #ccc;
  }
}
</style>

