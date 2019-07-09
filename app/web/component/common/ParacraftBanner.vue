<template>
  <div class="banner-container">
    <span class="banner-slogan">
      <img class="banner-box-icon" src="../../asset/images/box.png" alt="">
      <div class="banner-slogan-normal">
        Paracraft,the software
      </div>
      <div class="banner-slogan-normal">
        for youth programming
      </div>
      <div class="banner-slogan-small">
        Learn how to “program”, learn how to learn
      </div>
      <span class="banner-pointer"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style lang="scss" scoped>
.banner-container {
  height: 400px;
  max-width: 1600px;
  margin: 0 auto;
  background-image: url('../../asset/images/banner.png');
  position: relative;

  .banner-slogan {
    position: absolute;
    font-family: 'OpenSans';
    top: 70px;
    left: 200px;
    display: block;
    width: 436px;
    color: #fff;
    font-size: 32px;
    .banner-box-icon {
      margin-bottom: 40px;
    }
    &-normal {
      line-height: 42px;
      font-weight: bold;
    }
    &-small {
      margin-top: 20px;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.6);
      font-family: 'OpenSans-Semibold';
    }
    .banner-pointer {
      display: block;
      margin-top: 32px;
      width: 32px;
      height: 9px;
      background-color: #30fbff;
      border-radius: 5.5px;
    }
  }
}

@media (max-width: 880px) {
  .banner-container {
    background-image: url('../../asset/images/banner2.png');
    background-color: #4b9aff;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 50% 222px;
    height: 443px;
    .banner-box-icon {
      display: none;
    }
    .banner-slogan {
      position: static;
      width: 290px;
      margin: 0 auto;
      padding-top: 45px;
      &-normal {
        font-size: 24px;
        line-height: 34px;
      }
      &-small {
        font-size: 14px;
        margin-top: 24px;
      }
      .banner-pointer {
        margin-top: 34px;
      }
    }
  }
}
</style>
