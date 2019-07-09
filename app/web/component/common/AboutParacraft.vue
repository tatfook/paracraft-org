<template>
  <div class="about-paracraft">
    <div class="about-paracraft-title">
      <span class="about-paracraft-title-icon"><img src="@/asset/images/box2.png" alt=""></span>
      <span class="about-paracraft-title-text">About Paracraft</span>
      <span class="about-paracraft-title-icon"><img src="@/asset/images/box2.png" alt=""></span>
    </div>
    <div class="about-paracraft-main">
      <div class="about-paracraft-main-left">
        <p>
          Paracraft is a 3D animation and programming tool for people aging above 7. You can use it to create animation movies, games or any 3D works. Kids love playing and creating works with paracraft, and share with their friends.
        </p>
        <p>
          We share the same believes as Scratch in the importance of programming as well as how best to learn. Indeed, you can think of us as an upgrade of Scratch. We made it 3D, and thus it is more fun and attractive to children. It is a great environment for children to start learning of programming. And you can progress smoothly to a much deeper level and getting really serious with programming if you really fall in love with programming. If you are not ready to get serious with programming, you still can learn basics of programming, know what it is about, and you probably will find yourself passionately building great 3D scenes and moves instead! We found kids of all interests and all ages find their passion in paracraft and get themselves busy building things and learning things. So buckle up, and be ready to take a great adventure! Life will unfold before you like a beautiful flower.
        </p>
      </div>
      <div class="about-paracraft-main-right">
        <div class="about-paracraft-main-right-video">
          <!-- <video class="about-paracraft-main-right-video-content" controls :src="currenPlayVideoUrl" :poster="currentPoster"></video> -->
          <iframe v-if="selectedVideo == 0" class="video-iframe" src="https://www.youtube.com/embed/6bn4EPZyMXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe v-else class="video-iframe" src="https://www.youtube.com/embed/uUP4ZOp9Vgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="about-paracraft-main-right-buttons">
          <span :class="['about-paracraft-main-right-buttons-button',{selected: 0 === selectedVideo}]" @click="playVideo(0)"><img class="play-icon" :src="0 === selectedVideo ? selectedPlayIcon_0 : selectedPlayIcon_1" alt="">What is Paracraft</span>
          <span :class="['about-paracraft-main-right-buttons-button',{selected: 1 === selectedVideo}]" @click="playVideo(1)"><img class="play-icon" :src="1 === selectedVideo ? selectedPlayIcon_0 : selectedPlayIcon_1" alt="">Basic Tutorial</span>
        </div>
      </div>
    </div>
    <div class="about-paracraft-letters">
      <a class="about-paracraft-letters-link" href="/letter?type=founder"><img src="@/asset/images/letter.png" alt="">Founder Letter</a>
      <a class="about-paracraft-letters-link" href="/letter?type=parent"><img src="@/asset/images/letter.png" alt="">To Parents</a>
      <a class="about-paracraft-letters-link" href="/letter?type=educator"><img src="@/asset/images/letter.png" alt="">To Educators</a>
      <a class="about-paracraft-letters-link" href="https://github.com/LiXizhi/ParaCraftSDK/wiki/LetterToDevelopers" target="_blank"><img src="@/asset/images/letter.png" alt="">To Developers</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutParacraft',
  data() {
    return {
      selectedVideo: 0,
      selectedPlayIcon_0: require('@/asset/images/play_white.png'),
      selectedPlayIcon_1: require('@/asset/images/play_black.png')
    }
  },
  computed: {
    currenPlayVideoUrl() {
      return this.selectedVideo == 0
        ? 'https://www.youtube.com/watch?v=KfpqXMLNtLY'
        : 'https://www.youtube.com/watch?v=uUP4ZOp9Vgo'
    },
    currentPoster() {
      return this.selectedVideo == 0
        ? require('@/asset/images/what_is_paracraft.png')
        : require('@/asset/images/basic_tutorial.png')
    }
  },
  methods: {
    playVideo(index) {
      this.selectedVideo = index
    }
  }
}
</script>
<style lang="scss" scoped>
.about-paracraft {
  max-width: 1200px;
  margin: 60px auto;
  font-family: 'HelveticaNeue';
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    &-icon {
      margin: 0 20px;
    }
    &-text {
      font-size: 26px;
    }
  }
  &-main {
    display: flex;
    flex-wrap: wrap;
    &-left {
      width: 558px;
      font-size: 16px;
      color: #666;
      line-height: 30px;
      letter-spacing: 0;
    }
    &-right {
      flex: 1;
      padding-top: 32px;
      &-video {
        max-width: 590px;
        background: rgb(241, 241, 241);
        box-sizing: border-box;
        padding: 16px;
        border-radius: 8px;
        margin: 20px auto;
        .video-iframe {
          width: 560px;
          height: 315px;
        }
        &-content {
          width: 100%;
          height: 280px;
          border-radius: 8px;
        }
      }
      &-buttons {
        display: flex;
        justify-content: center;
        &-button {
          margin: 30px;
          padding: 12px 50px;
          cursor: pointer;
          border-radius: 30px;
          color: #333;
          font-weight: bold;
          background: #ccc;
          display: flex;
          align-items: center;
          .play-icon {
            margin-right: 12px;
          }
          &.selected {
            color: white;
            background: #438cff;
          }
        }
      }
    }
  }
  &-letters {
    display: flex;
    flex-wrap: wrap;
    &-link {
      text-align: center;
      flex: 1;
      color: #409eff;
      font-weight: bold;
      img {
        margin-right: 10px;
      }
      & + .about-paracraft-letters-link {
        border-left: 1px solid #ccc;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .about-paracraft {
    margin: 30px auto;
    &-title {
      &-text {
        font-size: 20px;
      }
    }
    &-main {
      &-left {
        width: 100%;
        padding: 0 20px;
      }
      &-right {
        width: 100%;
        margin-bottom: 30px;
        &-video {
          .video-iframe {
            width: 100%;
            height: 215px;
          }
        }
        &-buttons {
          &-button {
            margin: 10px;
            padding: 12px 10px;
            font-size: 12px;
          }
        }
      }
    }
    &-letters {
      display: flex;
      flex-wrap: wrap;
      &-link {
        min-width: 160px;
        text-align: left;
        margin: 12px;
        & + .about-paracraft-letters-link {
          border-left: none;
        }
      }
    }
  }
}
</style>


