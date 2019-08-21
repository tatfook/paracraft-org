<template>
  <div class="download">
    <div class="download-welcome">
      <div class="download-welcome-center">
        <p class="download-welcome-center-title">Welcome to Download ParaCraft</p>
        <div class="download-welcome-center-version"><span class="download-welcome-center-version-new">Version：{{ downloadURL.version }}</span> <a href="https://www.evernote.com/shard/s177/client/snv?noteGuid=f876e8cb-4563-4b26-ba23-55524609b79d&noteKey=89b1fed1ca2e1eb1&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs177%2Fsh%2Ff876e8cb-4563-4b26-ba23-55524609b79d%2F89b1fed1ca2e1eb1&title=%2523%2523%2BParaCraft%2BChange%2BLog%2B2019" class="download-welcome-center-version-update">Changelog</a></div>
      </div>
    </div>
    <div class="download-center">
      <div class="download-center-cabinet">
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/Windows-8.png" alt="">
            <div class="download-center-cabinet-box-recommend">Windows</div>
            <a :href="downloadURL.window_install" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight "><img class="download-center-cabinet-box-desc-img" src="@/asset/images/下载页/下载安装/Windows-8拷贝.png" alt="">Download</a>
          </div>
        </div>
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/mac.png" alt="">
            <div class="download-center-cabinet-box-recommend">Mac</div>
            <a :href="downloadURL.mac" target="_blank" @click="addDownloadCount" class="download-center-cabinet-box-desc download-center-cabinet-box-desc-highlight">Apple Store</a>
          </div>
        </div>
      </div>
      <div class="download-center-cabinet download-center-cabinet-phone">
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <div class="download-center-cabinet-box-cover">
              <img src="@/asset/images/下载页/下载安装/phone_android.png" alt="">
              <qrcode :value="downloadURL.android_apk" :options="QROptions" class="download-center-cabinet-box-QR"></qrcode>
            </div>
            <p class="download-center-cabinet-box-recommend">Android</p>
            <a :href="downloadURL.android_apk" class="download-center-cabinet-box-hint-phone" @click="addDownloadCount">Download Android APK</a>
          </div>
        </div>
        <div class="download-center-cabinet-box-wrap">
          <div class="download-center-cabinet-box">
            <img src="@/asset/images/下载页/下载安装/phone_android拷贝.png" alt="">
            <div class="download-center-cabinet-box-recommend disabled">IOS<span class="tips">(in submission)</span></div>
            <div class="download-center-cabinet-box-hint-disabled">Download from Apple App Store</div>
          </div>
        </div>
      </div>
      <div class="download-center-paracraft download-center-paracraft-code ">
        <div class="download-center-paracraft-title">Source Code</div>
        <div class="download-center-paracraft-hint">Paracraft is free and open source. Contact us on github if you want to contribute.</div>
        <div class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://github.com/LiXizhi" target="_blank">https://github.com/LiXizhi</a></div>
        <div class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://github.com/LiXizhi/ParacraftSDK" target="_blank">https://github.com/LiXizhi/ParacraftSDK</a></div>
      </div>
    </div>
    <div class="download-abstract">
      <div class="download-abstract-intro">
        <div class="download-abstract-intro-box flex-start">
          <div class="download-abstract-intro-box-content">
            <img class="download-abstract-intro-box-content" src="@/asset/images/下载页/all_devices_banner.png" alt="">
            <div class="download-abstract-intro-box-content-text">Paracraft is a free movie making tool for everyone. <br>
              The vision: <span class="text-bold">“Everyone should make a movie in its life!”</span></div>
            <ul class="download-abstract-intro-box-content-text-list">
              <li>Create 3D scenes, models, actors in an immersive blocky world.</li>
              <li>Make animations, movies, interactive stories at real time.</li>
              <li>Learn programming.</li>
            </ul>
            <div class="download-abstract-intro-box-content-text">Download now to view hundreds of movies created by our users.</div>
          </div>
        </div>
        <div class="download-abstract-intro-box">
          <div class="download-abstract-intro-box-content">
            <img class="download-abstract-intro-box-content-img" src="@/asset/images/下载页/paracraft_app_logo.png" alt="">
            <h4 class="download-abstract-intro-box-content-title">Paracraft</h4>
            <div class="download-abstract-intro-box-content-text">Free movie making too</div>
            <div class="download-abstract-intro-box-content-text"><a class="blue-link" href="https://github.com/LiXizhi/ParaCraftSDK">Open sourced</a></div>
            <div class="download-abstract-intro-box-content-text">Paracraft SDK, source code, plugins, see <a class="blue-link" href="https://keepwork.com/official/Resource_en/intro">here</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="software-change-log">
      <div class="download-center">
        <div class="download-center-paracraft download-center-paracraft-code ">
          <div class="download-center-paracraft-title marginTop0px">Change log:</div>
          <div class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://www.evernote.com/shard/s177/client/snv?noteGuid=f876e8cb-4563-4b26-ba23-55524609b79d&noteKey=89b1fed1ca2e1eb1&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs177%2Fsh%2Ff876e8cb-4563-4b26-ba23-55524609b79d%2F89b1fed1ca2e1eb1&title=%2523%2523%2BParaCraft%2BChange%2BLog%2B2019" target="_blank">see developer log
            </a></div>
          <div class="download-center-paracraft-hint"><a class="download-center-paracraft-hint-guide" href="https://github.com/LiXizhi/ParaCraftSDK/wiki/ParacraftFeatures" target="_blank">feature list
            </a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post } from '@/api'

export default {
  name: 'Download',
  data() {
    return {
      downloadCount: '',
      downloadURL: {}
    }
  },
  computed: {
    optimizeDownloadCount() {
      this.downloadCount = 103200 + this.downloadCount
      return this.downloadCount.toString().split('')
    },
    QROptions() {
      return {
        width: 91,
        height: 91
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    document.title = 'Download | Paracraft'
    this.getdownloadURL()
  },
  destroyed() {
    document.title = 'Paracraft'
  },
  methods: {
    addDownloadCount() {
      post('keepworks/paracraft_download_count', {})
    },
    async getdownloadURL() {
      const url = await get('keepworks/paracraft_download_url')
      this.downloadURL = url
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  .blue-link {
    color: #4590ff;
  }
  .software-change-log {
    background: #f9f8f8;
  }
  &-welcome {
    background: rgb(70, 145, 255);
    padding: 40px 30px 50px;
    &-center {
      max-width: 1200px;
      margin: 0 auto;
      color: #fff;
      &-title {
        margin: 0;
        font-size: 30px;
      }
      &-version {
        &-new {
          margin-right: 30px;
        }
        &-update {
          color: #fff;
          text-decoration: none;
          &:hover {
            color: #dadada;
          }
        }
      }
      &-count {
        margin: 0;
        &-diamonds {
          display: inline-block;
          background: #fff;
          color: #1e7cfc;
          padding: 0 4px;
          margin-right: 4px;
        }
      }
    }
  }
  &-center {
    max-width: 1200px;
    margin: 0 auto;
    &-guide {
      min-height: 62px;
      line-height: 62px;
      background: #e7f5ed;
      text-align: center;
      &-link {
        text-decoration: none;
        color: #ff8150;
        &:hover {
          color: #e17247;
          text-decoration: underline;
        }
      }
    }
    &-cabinet {
      display: flex;
      padding: 65px 0;
      &-phone {
        background: #e9f4fe;
      }
      &-box {
        flex: 1;
        text-align: center;
        align-items: center;
        &-cover {
          width: 50px;
          margin: 0 auto;
          position: relative;
        }
        &-QR {
          position: absolute;
          right: -110px;
          top: 0;
        }
        &-wrap {
          display: flex;
          align-items: center;
          flex: 1;
        }
        &-recommend {
          margin: 10px auto;
          font-size: 20px;
          &.disabled {
            color: #858585;
            .tips {
              font-size: 16px;
            }
          }
        }
        &-desc {
          display: flex;
          padding: 3px;
          border-radius: 80px;
          margin: 0px auto;
          max-width: 142px;
          border: 1px solid #409eff;
          justify-content: center;
          color: #409eff;
          text-decoration: none;
          font-size: 14px;
          &:hover {
            color: rgb(51, 143, 229);
            border: 1px solid rgb(51, 143, 229);
          }
          &-highlight {
            background: #409eff;
            color: #fff;
            &:hover {
              background: rgb(51, 143, 229);
              color: #fff;
            }
          }
          &-img {
            object-fit: contain;
            margin-right: 6px;
          }
        }
        &-hint {
          font-size: 14px;
          color: #8d8d8d;
          &-disabled {
            font-size: 14px;
            color: #858585;
          }
          &-phone {
            max-width: 176px;
            color: #32b16c;
            margin: 0 auto;
            font-size: 14px;
            display: block;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            &:hover {
              color: #32b16c;
              text-decoration: underline;
            }
          }
        }
      }
    }
    &-paracraft {
      border-bottom: 1px solid #d9d9d9;
      &-title {
        color: #333;
        font-size: 24px;
        margin: 40px 0 20px;
        &.marginTop0px {
          margin-top: 0px;
        }
      }
      &-hint {
        font-size: 16px;
        line-height: 32px;
        &-guide {
          color: #399fff;
          text-decoration: none;
          &:hover {
            color: #399fff;
            text-decoration: underline;
          }
        }
      }
      &-code {
        border: none;
        padding-bottom: 50px;
      }
    }
  }
  &-abstract {
    background: rgb(249, 248, 248);
    padding: 68px 0 34px;
    &-intro {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      &-box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        &.flex-start {
          justify-content: flex-start;
        }
        &-content {
          text-align: left;
          &-title {
            margin: 40px 0 10px 0;
          }
          &-text {
            max-width: 478px;
            color: #333;
            font-size: 16px;
            line-height: 32px;
            &-list {
              margin-top: 10px;
              margin-left: -22px;
            }
            .text-bold {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .download {
    &-welcome {
      &-center {
        padding-left: 12px;
        &-title {
          font-size: 16px;
          padding: 12px 0 0 0;
          font-weight: bold;
        }
        &-version {
          font-size: 12px;
          &-new {
          }
        }
        &-count {
          font-size: 12px;
        }
      }
    }
    &-center {
      &-guide {
        font-size: 12px;
        margin: 0;
        min-height: 40px;
        line-height: 40px;
      }
      &-cabinet {
        flex-wrap: wrap;
        padding: 0;
        &-box {
          min-width: 220px;
          border-bottom: 10px solid rgb(249, 249, 249);
          padding: 26px 0;
          &-hint {
            margin-top: 20px;
            font-size: 12px;
            &-phone {
              max-width: 220px;
            }
          }
        }
      }
      &-paracraft {
        &-title {
          font-size: 14px;
          padding-left: 12px;
        }
        &-hint {
          font-size: 12px;
          padding: 0 12px;
        }
      }
    }
    &-abstract {
      background: #fff;
      border-top: 10px solid rgb(249, 249, 249);
      border-bottom: 10px solid rgb(249, 249, 249);
      &-intro {
        flex-wrap: wrap;
        &-box {
          min-width: 260px;
          margin: 12px;
          &-content {
            width: 100%;
            max-width: 480px;
            &-title {
              font-size: 14px;
            }
            &-text {
              font-size: 12px;
              &-list {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .software-change-log {
      background: #fff;
      padding-top: 10px;
    }
  }
}
</style>

