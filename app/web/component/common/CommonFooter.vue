<template>
  <div class="common-footer">
    <div class="common-footer-container">
      <div class="common-footer-item">
        <div class="common-footer-title">Education Philosophy</div>
        <ul>
          <li><a href="/letter?type=founder">Founder Letter</a></li>
          <li><a href="/letter?type=parent">To Parents</a></li>
          <li><a href="/letter?type=educator">To Educators</a></li>
          <li><a href="https://github.com/LiXizhi/ParaCraftSDK/wiki/LetterToDevelopers" target="_blank">Self-Directed Learning</a></li>
        </ul>
      </div>
      <div class="common-footer-item">
        <div class="common-footer-title">Community</div>
        <ul>
          <li><a href="https://keepwork.com/" target="_blank">Projects</a></li>
          <li><a href="https://keepwork.com/official/paracraft/blog" target="_blank">Staff Blog</a></li>
        </ul>
      </div>
      <div class="common-footer-item">
        <div class="common-footer-title">Learn Paracraft</div>
        <ul>
          <li><a href="https://keepwork.com/official/docs/index" target="_blank">Documentation</a></li>
          <li><a href="https://keepwork.com/official/paracraft/faq" target="_blank">FAQ</a></li>
          <li><a href="http://paracraft.keepwork.com/download" target="_blank">Download Paracraft</a></li>
        </ul>
      </div>
      <div class="common-footer-item">
        <div class="common-footer-title">Developers</div>
        <ul>
          <li><a href="#">To Developers</a></li>
          <li><a href="https://github.com/LiXizhi/NPLRuntime/wiki" target="_blank">NPL</a></li>
          <li><a href="https://github.com/LiXizhi/ParaCraft" target="_blank">Paracraft</a></li>
        </ul>
      </div>
      <div class="common-footer-item">
        <div class="common-footer-title">About</div>
        <ul>
          <li><a href="/whoWeAre">Who We Are</a></li>
          <li>
            <a class="common-footer-icon-link" href="#" target="_blank">
              <img class="icon" src="@/asset/images/fb.png" alt="" />
              <img class="icon-hover" src="@/asset/images/fb_color.png" alt="" />
            </a>
            <a class="common-footer-icon-link" href="#" target="_blank">
              <img class="icon" src="@/asset/images/youtube.png" alt="" />
              <img class="icon-hover" src="@/asset/images/youtube_color.png" alt="" />
            </a>
            <a class="common-footer-icon-link" href="#" target="_blank">
              <img class="icon" src="@/asset/images/mail.png" alt="" />
              <img class="icon-hover" src="@/asset/images/mail_hover.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>
<style lang="scss" scoped>
.common-footer {
  background-color: #2d2d2d;
  padding: 72px 0;
  &-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  &-title {
    font-size: 20px;
    color: #ccc;
    margin-bottom: 32px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  li + li {
    margin-top: 16px;
  }
  .icon {
    display: inline-block;
    cursor: pointer;
  }
  .icon-hover {
    display: none;
    cursor: pointer;
  }
  a {
    font-size: 16px;
    color: #666;
    &:hover {
      text-decoration: none;
      color: #fff;
      .icon {
        display: none;
      }
      .icon-hover {
        display: inline-block;
      }
    }
  }
  &-icon-link {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>