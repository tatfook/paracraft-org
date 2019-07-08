<template>
  <div class="paracraft">
    <div class="paracraft-main">
      <router-view id="paracraft-page" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import router from './index.router'
import ElementUI, { Progress } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vuex)
Vue.use(ElementUI)

export default {
  name: 'App',
  router
}
</script>

