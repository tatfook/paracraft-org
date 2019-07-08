<template>
  <div class="paracraft-contact">
    <div class="contact-banner">
      <paracraft-banner></paracraft-banner>
    </div>
    <div class="contact-title"> <span class="title-box"></span><span class="title-text">Contact</span><span class="title-box"></span></div>
    <div class="contact-main">
      <div class="contact-main-text">
        We share the same believes as Scratch in the importance of programming as well as how best to learn. Indeed, you can think of us as an upgrade of Scratch. We made it 3D, and thus it is more fun and attractive to children. It is a great environment for children to start learning of programming. And you can progress smoothly to a much deeper level and getting really serious with programming if you really fall in love with programming.
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
    &-text {
      width: 526px;
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

@media (max-width: 768px) {
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




