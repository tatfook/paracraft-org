<template>
  <div class="user-works">
    <div class="user-works-title">
      <span class="user-works-title-icon"><img src="@/asset/images/box2.png" alt=""></span>
      <span class="user-works-title-text">Recommended User Works</span>
      <span class="user-works-title-icon"><img src="@/asset/images/box2.png" alt=""></span>
    </div>
    <div class="user-works-cabinet">
      <div class="user-works-cabinet-box" @click="playCurrentVideo(index)" v-for="(item,index) in userWorksData" :key="index">
        <div class="user-works-cabinet-box-video">
          <img class="user-works-cabinet-box-video-cover" :src="item.poster" alt="">
          <img class="user-works-cabinet-box-video-play" src="@/asset/images/play.png" alt="">
        </div>
        <p class="user-works-cabinet-box-name">{{item.name}}</p>
      </div>
    </div>
    <img class="user-works-bgpic-1" src="@/asset/images/c.png" alt="">
    <img class="user-works-bgpic-2" src="@/asset/images/c.png" alt="">
    <img class="user-works-bgpic-3" src="@/asset/images/c.png" alt="">
    <div class="user-works-bottom">
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserWorks',
  data() {
    return {
      userWorksData: [
        {
          poster: require('@/asset/images/works/1.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=B-Qr2hBEJL0',
          name: 'BlockBot'
        },
        {
          poster: require('@/asset/images/works/2.png'),
          videoUrl: 'https://www.youtube.com/watch?v=suNY6hPINw8',
          name: 'Heart And Hands'
        },
        {
          poster: require('@/asset/images/works/3.png'),
          videoUrl: 'https://www.youtube.com/watch?v=Fu0dELWhssY',
          name: 'The Boy and the Apple Tree'
        },
        {
          poster: require('@/asset/images/works/4.png'),
          videoUrl: 'https://www.youtube.com/watch?v=URZ-RB9did8',
          name: 'Round Story'
        },
        {
          poster: require('@/asset/images/works/5.png'),
          videoUrl: 'https://www.youtube.com/watch?v=Lovl1obZdo4',
          name: 'Round Story 2'
        },
        {
          poster: require('@/asset/images/works/6.png'),
          videoUrl: 'https://www.youtube.com/watch?v=TZX2wUqTXDI',
          name: 'What Do You Do With An Idea?'
        },
        {
          poster: require('@/asset/images/works/7.png'),
          videoUrl: 'https://www.youtube.com/watch?v=k0YP7kUC7G4',
          name: 'I Had A Black Dog'
        },
        {
          poster: require('@/asset/images/works/8.png'),
          videoUrl: 'https://www.youtube.com/watch?v=zzNWV8ECu-Q',
          name: 'Liyuan Primary School'
        },
        {
          poster: require('@/asset/images/works/9.png'),
          videoUrl: 'https://www.youtube.com/watch?v=GJkQPYPYCjA',
          name: 'A day for the hungry'
        },
        {
          poster: require('@/asset/images/works/10.png'),
          videoUrl: 'https://www.youtube.com/watch?v=OklGeZmn7O8',
          name: 'To Mars'
        },
        {
          poster: require('@/asset/images/works/11.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=PezNJdxptdo',
          name: 'Mind Master'
        },
        {
          poster: require('@/asset/images/works/12.png'),
          videoUrl: 'https://www.youtube.com/watch?v=itkrGkOHonE',
          name: 'The Great Fireman'
        },
        {
          poster: require('@/asset/images/works/13.png'),
          videoUrl: 'https://www.youtube.com/watch?v=dOny21WZHA0',
          name: 'The Great Inventor'
        },
        {
          poster: require('@/asset/images/works/14.png'),
          videoUrl: 'https://www.youtube.com/watch?v=MPhAx9RniLg',
          name: 'Mini Thing'
        },
        {
          poster: require('@/asset/images/works/15.png'),
          videoUrl: 'https://www.youtube.com/watch?v=FPURHLPj-J8',
          name: 'Black Dog'
        },
        {
          poster: require('@/asset/images/works/16.png'),
          videoUrl: 'https://www.youtube.com/watch?v=0cCBnkOj_WU',
          name: 'The Clown'
        },
        {
          poster: require('@/asset/images/works/17.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=-xZmty75LdY',
          name: 'Human Resources'
        },
        {
          poster: require('@/asset/images/works/18.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=gHiPSYqye9E',
          name: 'Tank Force'
        },
        {
          poster: require('@/asset/images/works/19.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=jlbV98guLv4',
          name: 'Connect the Roads'
        },
        {
          poster: require('@/asset/images/works/20.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=AGIxs4absUs',
          name: 'King of the Jungle'
        },
        {
          poster: require('@/asset/images/works/21.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=oPShp1GYpoc',
          name: 'Cooking Day'
        },
        {
          poster: require('@/asset/images/works/22.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=luLJckt0Jcw',
          name: 'Game of Life'
        },
        {
          poster: require('@/asset/images/works/23.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=aWGFTB2vMRE',
          name: 'Blorxz'
        },
        {
          poster: require('@/asset/images/works/24.jpg'),
          videoUrl: 'https://www.youtube.com/watch?v=fDzIxgLE7c4',
          name: 'Fire Boy and Water Girl'
        },

      ]
    }
  },
  methods: {
    playCurrentVideo(index) {
      window.open(this.userWorksData[index].videoUrl)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-works {
  background: #4793ff;
  padding: 72px 0 0;
  position: relative;
  font-family: 'HelveticaNeue';
  &-bgpic-1 {
    position: absolute;
    top: 300px;
    left: 100px;
  }
  &-bgpic-2 {
    position: absolute;
    right: 100px;
    bottom: 300px;
  }
  &-bgpic-3 {
    position: absolute;
    bottom: 150px;
    left: -100px;
    width: 320px;
  }
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-bottom: 40px;
    &-icon {
      margin: 0 20px;
    }
    &-text {
      font-size: 26px;
      color: #fff;
    }
  }
  &-cabinet {
    position: relative;
    z-index: 999;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &-box {
      width: 285px;
      padding: 16px 16px 5px;
      background: #fff;
      margin: 7px 7px;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        .user-works-cabinet-box-video-play {
          opacity: 1;
        }
      }
      &-video {
        position: relative;
        &-cover {
          width: 100%;
          border-radius: 6px;
          height: 143px;
          object-fit: cover;
        }
        &-play {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          opacity: 0;
        }
      }
      &-name {
        text-align: center;
        margin: 10px 0 0 0;
      }
    }
  }
  &-bottom {
    height: 71px;
    margin-top: 72px;
    background: url(../../asset/images/semicircle.png);
  }
}
@media screen and (max-width: 768px) {
  .user-works {
    &-bgpic-1,
    &-bgpic-2,
    &-bgpic-3 {
      display: none;
    }
    &-title {
      &-text {
        font-size: 20px;
      }
    }
    &-cabinet {
      justify-content: center;
      &-box {
        width: 46%;
        box-sizing: border-box;
        padding: 10px 10px 5px;
        margin: 4px 4px;
        &-video {
          &-cover {
            height: 100px;
          }
          &-play {
            width: 30px;
            opacity: 1;
          }
        }
        &-name {
          font-size: 14px;
        }
      }
    }
  }
}
</style>

