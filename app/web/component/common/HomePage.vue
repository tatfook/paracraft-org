<template>
  <div class="paracraft-homepage">
    <about-paracraft></about-paracraft>
    <home-center></home-center>
    <user-works></user-works>
  </div>
</template>

<script>
import AboutParacraft from './AboutParacraft'
import HomeCenter from './HomeCenter'
import UserWorks from './UserWorks'
export default {
  name: 'HomePage',
  components: {
    AboutParacraft,
    HomeCenter,
    UserWorks
  }
}
</script>
