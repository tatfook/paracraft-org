<template>
  <div class="banner-container">
    <img class="banner-box-icon" src="../../asset/images/box.png" alt="">
    <span class="banner-slogan">
      <div class="banner-slogan-normal">
        Pracraft,the software
      </div>
      <div class="banner-slogan-normal">
        for youth programming
      </div>
      <div class="banner-slogan-small">
        Learn how to “program”, learn how to learn
      </div>
    </span>
    <span class="banner-pointer"></span>
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
  background: url('../../asset/images/banner.png');
  position: relative;
  .banner-box-icon {
    position: absolute;
    top: 70px;
    left: 250px;
  }
  .banner-pointer {
    position: absolute;
    top: 310px;
    left: 250px;
    display: block;
    width: 32px;
    height: 9px;
    background-color: #30fbff;
    border-radius: 5.5px;
  }
  .banner-slogan {
    position: absolute;
    top: 145px;
    left: 250px;
    display: block;
    width: 436px;
    color: #fff;
    font-size: 32px;
    &-normal {
      line-height: 42px;
    }
    &-small {
      margin-top: 20px;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

@media (max-width: 768px) {
  .banner-container {
    $left: 40px;
    .banner-box-icon {
      left: $left;
      top: 140px;
    }
    .banner-slogan {
      left: $left;
      top: 200px;
      &-normal {
        font-size: 26px;
      }
      &-small {
        font-size: 16px;
      }
    }
    .banner-pointer {
      left: $left;
      top: 360px;
    }
  }
}
</style>
