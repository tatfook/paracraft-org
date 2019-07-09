<template>
  <div class="paracraft-contact">
    <div class="contact-banner">
      <paracraft-banner></paracraft-banner>
    </div>
    <div class="contact-title"> <span class="title-box"></span><span class="title-text">Contact</span><span class="title-box"></span></div>
    <div class="contact-main">
      <div class="contact-main-text">
       Paracraft’s mission is to create a parallel world, for which we coined the word “ParaWorld”, where everyone can create their own games or creative 3D works, where people can keep themselves busy, immersed in their creative work. We are well aware such a dream needs a large community. If you share our mission, we welcome you to join us to expand our community. Together, let’s make it!
      </div>
      <div class="contact-main-link">
        <a class="link-item clear-link" href="https://www.facebook.com/paracraftpage" target="_blank">
          <img class="link-item-icon" src="../asset/images/fb_color.png" alt="facebook">
          Paracraft
        </a>
        <a class="link-item clear-link" href="https://www.youtube.com/channel/UC7pzmXOhkrPxFuOWfhoeSDA" target="_blank">
          <img class="link-item-icon" src="../asset/images/youtube_color.png" alt="youtube">
          Xizhi Li
        </a>
        <a href="mailto:lixizhi@paraengine.com" class="link-item clear-link">
          <img class="link-item-icon" src="../asset/images/mail_color.png" alt="email">
          lixizhi@paraengine.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ParacraftBanner from './common/ParacraftBanner'
export default {
  name: 'Contact',
  components: {
    ParacraftBanner
  },
  mounted() {
    window.document.title = 'Contact | Paracraft'
  },
  destroyed() {
    window.document.title = ''
  }
}
</script>

<style lang="scss" scoped>
.paracraft-contact {
  max-width: 1600px;
  margin: 0 auto;
  .contact-title {
    color: #333;
    font-size: 32px;
    text-align: center;
    margin-top: 72px;
    margin-bottom: 40px;
    font-family: 'OpenSans-Semibold';
    .title-text {
      margin: 0 15px;
    }
    .title-box {
      display: inline-block;
      width: 21px;
      height: 21px;
      background: url('../asset/images/box2.png');
    }
  }
  .contact-main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 500px;
    margin-bottom: 72px;
    &-text {
      width: 500px;
      font-size: 16px;
      color: #666;
      line-height: 30px;
      margin-right: 50px;
    }

    &-link {
      margin-left: 50px;
      width: 500px;
      .link-item {
        display: block;
        margin-bottom: 16px;
        width: 494px;
        height: 80px;
        box-sizing: border-box;
        padding-left: 107px;
        line-height: 80px;
        background-color: #f5f5f5;
        border-radius: 40px;
        font-size: 20px;
        color: #333;
        cursor: pointer;
        &-icon {
          margin-right: 19px;
        }
      }
      .clear-link {
        &:link,
        &:visited,
        &:hover,
        &:active {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .paracraft-contact {
    .contact-title {
      margin: 20px auto;
    }

    .contact-main {
      min-width: auto;
      &-text {
        padding: 0 20px;
        width: 100%;
        margin-right: 0;
      }
      &-link {
        margin-left: 0;
        margin-top: 40px;
        .link-item {
          width: 90%;
          margin: 0 auto 20px;
          padding-left: 40px;
        }
      }
    }
  }
}
</style>




