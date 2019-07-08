<template>
  <div class="paracraft-homepage">
    <paracraft-banner></paracraft-banner>
    <about-paracraft></about-paracraft>
    <home-center></home-center>
    <user-works></user-works>
  </div>
</template>

<script>
import AboutParacraft from './AboutParacraft'
import HomeCenter from './HomeCenter'
import UserWorks from './UserWorks'
import ParacraftBanner from './ParacraftBanner'
export default {
  name: 'HomePage',
  components: {
    ParacraftBanner,
    AboutParacraft,
    HomeCenter,
    UserWorks
  }
}
</script>
