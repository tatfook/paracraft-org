<template>
  <div class="paracraft">
<<<<<<< HEAD
=======
    <common-header></common-header>
>>>>>>> 94190432e70bb963900d1e3ba6cc1786e0aa7995
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

