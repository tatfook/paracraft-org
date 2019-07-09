<template>
  <div class="home-center">
    <div class="home-center-section">
      <div class="home-center-section-left">
        <div class="part-box">
          <h5 class="part-box-title"><img class="part-box-title-icon" src="@/asset/images/box3.png" alt="">An Upgrade of Scratch</h5>
          <el-carousel height="304px">
            <el-carousel-item v-for="(img,index) in scratchCarouselData" :key="index">
              <img class="carousel-img" :src="img.imgUrl" alt="">
            </el-carousel-item>
          </el-carousel>
          <p>Scratch founder Mitchel Resnick said wonderfully about why people should learn programming and what is the best way to learn. We agree with him 100 percent, and we are working hard to achieve the same mission.</p>
          <p>Paracraft is an upgrade of scratch. Paracraft is 3D, and it automatically converts blocks to code. Paracraft also has powerful movie editor that allow you create rich movies and games.</p>
        </div>
        <div class="part-box">
          <h5 class="part-box-title"><img class="part-box-title-icon" src="@/asset/images/box3.png" alt="">Compare with MineCraft</h5>
          <el-carousel height="304px">
            <el-carousel-item v-for="(img,index) in mineCraftCarouselData" :key="index">
              <img class="carousel-img" :src="img.imgUrl" alt="">
            </el-carousel-item>
          </el-carousel>
          <p>At a later stage, paracraft learned and adopted Minecraft’s “blocky” visual style and the block-building fundamentals. So pararcraft looks like Minecraft. But there are some major difference that make paracraft more powerful and appealing to youth programming:</p>
          <p>
            ☉ complex movie editor<br>
            ☉ using bone blocks to define joints<br>
            ☉ programing directly in the 3D world<br>
          </p>
        </div>
        <div class="part-box">
          <h5 class="part-box-title"><img class="part-box-title-icon" src="@/asset/images/box3.png" alt="">Research</h5>
          <p>We believe paracaft is the most suited tool for youth programming and for fostering a learning environment that is more a rich playground, where self-directed learning is happening all the time naturally. We welcome researchers to use our data or collect data by themselves to do research on how paracraft help children learn programming and learn how to learn. We are also looking for universities and research institutions to set up labs for such research. It is in our strong belief that <strong>learn how to “program”, learn how to learn</strong> is essential for today’s education. So if you are researchers interested in doing such research or setting up such labs, please contact us.</p>
        </div>
      </div>
      <div class="home-center-section-right">
        <div class="part-box">
          <h5 class="part-box-title"><img class="part-box-title-icon" src="@/asset/images/box3.png" alt="">Learn how to “program”, learn how to learn</h5>
          <!-- <video class="part-box-videoUrl" controls src="https://www.youtube.com/watch?v=6G6M6PzGZic" poster="@/asset/images/Learn-cover.png"></video> -->
          <iframe class="video-iframe" src="https://www.youtube.com/watch?v=6G6M6PzGZic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>“Program” means to build things up. Programmers are builders, they build works to express themselves, to change things around, or to even change the world. In paracraft, you learn the complete skill set in building 3D works, from 3D scene building, moving making, to coding and CAD. You learn of design, trouble shooting, collaborating, and so on.</p>
          <p>“Program” also means to build up abstract models for complex systems, dissecting the whole abstract model into multiple composing parts on various layers so you can construct the whole by putting parts together. Thus “program” contains the systemic thinking methodologies. By learning how to program, you learn how to build up abstract models for various domains and how to tackle complex systems, the essential skills needed in today’s creative knowledge based economy.</p>
        </div>
        <div class="part-box">
          <h5 class="part-box-title"><img class="part-box-title-icon" src="@/asset/images/box3.png" alt="">Paracraft in Schools</h5>
          <el-carousel height="304px">
            <el-carousel-item v-for="(img,index) in paracraftCarouselData" :key="index">
              <img class="carousel-img" :src="img.imgUrl" alt="">
            </el-carousel-item>
          </el-carousel>
          <p>Students love paracraft in schools. They engage in making 3D animations and games while their creativity and programming skills get cultivated. They also learn of literature, history, biology, math, physics and other subjects by watching 3D animations movies or by playing game-like projects in 3D worlds. Teachers love to create course related 3D works with paracraft. It is a very rich playground, just like <a class="part-box-link" href="https://www.edutopia.org/kindergarten-creativity-collaboration-lifelong-learning" target="_blank">the kindergarten Scratch founder Mitchel Resnick has wanted</a>: “ a place for telling stories, building castles, painting pictures, making friends, and learning to share”. As he said wonderfully, school should be more like kindergartens, not the other way around.</p>
        </div>
        <div class="part-box">
          <h5 class="part-box-title"><img class="part-box-title-icon" src="@/asset/images/box3.png" alt="">Support and Funding</h5>
          <p>We believe we are on an important mission which must be carried out not just by us but also by vast numbers of people and institutions as well as companies sharing the same belief. So if you want to give out your support in any kind of form, please don’t hesitate to contact us.</p>
        </div>
      </div>
    </div>
    <img class="home-center-bgpic-1" src="@/asset/images/a.png" alt="">
    <img class="home-center-bgpic-2" src="@/asset/images/b.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'HomeCenter',
  data() {
    return {
      scratchCarouselData: [
        {
          imgUrl: require('@/asset/images/Scratch_img/1.jpg')
        },
        {
          imgUrl: require('@/asset/images/Scratch_img/2.jpg')
        },
        {
          imgUrl: require('@/asset/images/Scratch_img/3.jpg')
        }
      ],
      mineCraftCarouselData: [
        {
          imgUrl: require('@/asset/images/Minecraft_img/01.png')
        },
        {
          imgUrl: require('@/asset/images/Minecraft_img/02.jpg')
        },
        {
          imgUrl: require('@/asset/images/Minecraft_img/03.jpg')
        },
        {
          imgUrl: require('@/asset/images/Minecraft_img/04.jpg')
        }
      ],
      paracraftCarouselData: [
        {
          imgUrl: require('@/asset/images/Paracraft_img/11.png')
        },
        {
          imgUrl: require('@/asset/images/Paracraft_img/12.png')
        },
        {
          imgUrl: require('@/asset/images/Paracraft_img/13.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-center {
  background: #ffc946;
  position: relative;
  &-bgpic-1 {
    position: absolute;
    right: -100px;
    bottom: 300px;
  }
  &-bgpic-2 {
    position: absolute;
    top: 270px;
    left: 0;
  }
  &-section {
    position: relative;
    z-index: 999;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 72px 0;
    .part-box {
      background: #fff;
      border-radius: 12px;
      padding: 24px;
      margin: 18px 10px;
      .video-iframe {
        width: 530px;
        height: 305px;
      }
      /deep/ .el-carousel {
        .el-carousel__container {
          .el-carousel__item {
            .carousel-img {
              width: 100%;
              border-radius: 6px;
            }
          }
        }
      }
      &-title {
        font-size: 24px;
        font-family: 'HelveticaNeue';
        margin: 0 0 16px 0;
        &-icon {
          margin-right: 12px;
        }
      }
      &-videoUrl {
        border-radius: 6px;
        width: 100%;
      }
      &-link {
        color: #409eff;
      }
    }
    &-left {
      flex: 1;
    }
    &-right {
      flex: 1;
    }
  }
}
@media screen and (max-width: 768px) {
  .home-center {
    &-section {
      .part-box {
        .video-iframe {
          width: 100%;
          height: calc((100vw - 20px) / 542 * 304);
        }
        /deep/ .el-carousel {
          .el-carousel__container {
            height: calc((100vw - 20px) / 542 * 304) !important;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1930px) {
  .home-center {
    &-bgpic-1 {
      right: 200px;
      bottom: 300px;
    }
    &-bgpic-2 {
      top: 270px;
      left: 300px;
    }
    &-section {
      .part-box {
        border: 1px solid red;
        /deep/ .el-carousel {
          .el-carousel__container {
            height: calc((100vw - 20px) / 542 * 304) !important;
          }
        }
      }
    }
  }
  // .el-carousel {
  //           .el-carousel__container {
  //             height: calc((100vw - 20px) / 502 * 270) !important;
  //           }
  //         }
}
</style>
