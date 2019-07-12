<template>
  <div class="common-footer">
    <div class="common-footer-container">
      <div class="common-footer-normal common-footer-item" v-for="(footerItem, index) in footerData" :key='`footerItem${index}`'>
        <div class="common-footer-title">{{footerItem.title}}</div>
        <ul>
          <li v-for="(linkItem, index) in footerItem.links" :key='`linkItem${index}`'>
            <template v-if="linkItem.type === 'icons'">
              <a class="common-footer-icon-link" v-for="(iconItem, index) in linkItem.links" :key='`iconItem${index}`' :href="iconItem.link" target="_blank">
                <img class="icon" :src="iconItem.iconUrl" alt="" />
                <img class="icon-hover" :src="iconItem.hoverIconUrl" alt="" />
              </a>
            </template>
            <template v-else>
              <a class="common-footer-link" :href="linkItem.link" :target="linkItem.target || '_self'">{{linkItem.text}}</a>
            </template>
          </li>
        </ul>
      </div>
      <el-dropdown class="common-footer-phone common-footer-item" v-for="(footerItem, index) in footerData" :key='`footerItemPhone${index}`' placement="top">
        <span class="el-dropdown-link">
          {{footerItem.title}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(linkItem, index) in footerItem.links" :key='`linkItem${index}`'>
            <template v-if="linkItem.type === 'icons'">
              <a class="common-footer-icon-link" v-for="(iconItem, index) in linkItem.links" :key='`iconItem${index}`' :href="iconItem.link" target="_blank">
                <img class="icon-hover" :src="index == 3 ? iconItem.iconUrl : iconItem.hoverIconUrl" alt="" />
              </a>
            </template>
            <template v-else>
              <a class="common-footer-link" :href="linkItem.link" :target="linkItem.target || '_self'">{{linkItem.text}}</a>
            </template>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter',
  data() {
    return {
      footerData: [
        {
          title: 'Education Philosophy',
          links: [
            {
              link: '/letter?type=founder',
              text: 'Founder Letter'
            },
            {
              link: '/letter?type=parent',
              text: 'To Parents'
            },
            {
              link: '/letter?type=educator',
              text: 'To Educators'
            }
          ]
        },
        {
          title: 'Community',
          links: [
            {
              link: 'https://keepwork.com/',
              target: '_blank',
              text: 'Projects'
            },
            {
              link: 'https://keepwork.com/official/paracraft/blog',
              target: '_blank',
              text: 'Staff Blog'
            }
          ]
        },
        {
          title: 'Learn Paracraft',
          links: [
            {
              link: 'https://keepwork.com/official/docs/index',
              target: '_blank',
              text: 'Documentation'
            },
            {
              link: 'https://keepwork.com/official/paracraft/faq',
              target: '_blank',
              text: 'FAQ'
            },
            {
              link: 'http://paracraft.keepwork.com/download',
              target: '_blank',
              text: 'Download Paracraft'
            }
          ]
        },
        {
          title: 'Developers',
          links: [
            {
              link:
                'https://github.com/LiXizhi/ParaCraftSDK/wiki/LetterToDevelopers',
              target: '_blank',
              text: 'To Developers'
            },
            {
              link: 'https://github.com/LiXizhi/NPLRuntime/wiki',
              target: '_blank',
              text: 'NPL'
            },
            {
              link: 'https://github.com/LiXizhi/ParaCraft',
              target: '_blank',
              text: 'Paracraft'
            }
          ]
        },
        {
          title: 'About Us',
          links: [
            {
              link: '/whoWeAre',
              text: 'Who We Are'
            },
            {
              type: 'icons',
              links: [
                {
                  iconUrl: require('@/asset/images/fb.png'),
                  hoverIconUrl: require('@/asset/images/fb_color.png'),
                  link: 'https://www.facebook.com/paracraftpage/'
                },
                {
                  iconUrl: require('@/asset/images/youtube.png'),
                  hoverIconUrl: require('@/asset/images/youtube_color.png'),
                  link:
                    'https://www.youtube.com/channel/UC7pzmXOhkrPxFuOWfhoeSDA'
                },
                {
                  iconUrl: require('@/asset/images/twitter.png'),
                  hoverIconUrl: require('@/asset/images/twitter_color.png'),
                  link: 'https://twitter.com/lixizhi'
                },
                {
                  iconUrl: require('@/asset/images/mail.png'),
                  hoverIconUrl: require('@/asset/images/mail_hover.png'),
                  link: 'mailto:lixizhi@paraengine.com'
                }
              ]
            }
          ]
        }
      ]
    }
  }
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
  &-normal {
    display: initial;
  }
  &-phone {
    display: none;
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
    margin-bottom: 16px;
    cursor: pointer;
  }
  &-link {
    font-size: 16px;
    color: #666;
  }
  &-icon-link {
    margin-right: 20px;
    font-size: 0;
    .icon {
      margin-bottom: 16px;
    }
    &:hover {
      text-decoration: none;
      color: #fff;
      .icon {
        display: none;
        margin-bottom: 16px;
      }
      .icon-hover {
        display: inline-block;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .common-footer {
    padding: 24px 0;
    &-container {
      flex-direction: column;
      align-items: center;
    }
    &-normal {
      display: none;
    }
    &-phone {
      display: initial;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-dropdown {
      color: #fff;
    }
  }
}
</style>
