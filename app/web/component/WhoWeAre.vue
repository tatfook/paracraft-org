<template>
  <div class="who-we-are">
    <div class="who-we-are-banner">
      <paracraft-banner></paracraft-banner>
    </div>
    <div class="who-we-are-title">
      <span class="title-box"></span>
      <span class="title-text">Who We Are</span>
      <span class="title-box"></span>
    </div>
    <div class="who-we-are-main">
      <p>
        Our mission is to create a parallel world, for which we coined the word “ParaWorld”, where everyone can create their own games or creative 3D works, where people can keep themselves busy, immersed in their creative work.
      </p>
      <p>
        Starting from 2004, our founder Xizhi Li has been occupied in pursuing this dream. First he invented a programming language named NPL (Neural Parallel Language) whose built-in mechanism mimics how the human brain works, with programs acting like neurons that can be activated over the network, so these neuron-like programs can work in parallel, just like how the human brain does. Then he invented ParaEngine, which is a 3D game engine. Next based on ParaEngine, he came up with Paracraft, which is a powerful tool for people to build 3D animations or games, and which is also a great tool for people to learn of programming. So with Paracraft, finally there is a software tool that people can use to unleash their imagination and express themselves powerfully and beautifully in the 3D world, thus a ParaWorld is possible.
      </p>
      <p>
        With this ParaWorld, learning and education can be rich and easy. There are unlimited opportunities in how Paracraft can be used to change our learning/education.
      </p>
      <p>
        Please check out our users’ works, we hope you can see the potential of Paracraft in helping people create and learn. We welcome you to join us to make it true that everyone can create their own games or creative 3D works!
      </p>
    </div>
  </div>
</template>

<script>
import ParacraftBanner from './common/ParacraftBanner'
export default {
  name: 'WhoWeAre',
  components: {
    ParacraftBanner
  },
  mounted() {
    document.title = 'Who We Are | Paracraft'
  },
  destroyed() {
    document.title = 'Paracraft, the software for youth programming'
  }
}
</script>


<style lang="scss" scoped>
.who-we-are {
  &-title {
    color: #333;
    font-size: 32px;
    text-align: center;
    margin-top: 72px;
    margin-bottom: 40px;
    .title-text {
      margin: 0 15px;
      font-family: "HelveticaNeue", "OpenSans-Semibold";
      font-weight: bold;
    }
    .title-box {
      display: inline-block;
      width: 21px;
      height: 21px;
      background: url('../asset/images/box2.png');
    }
  }
  &-main {
    max-width: 1072px;
    margin: 0 auto 72px;
    p {
      line-height: 30px;
      margin: 18px 0;
    }
  }
}

@media (max-width: 1072px) {
  .who-we-are {
    &-title {
      margin: 20px auto;
    }

    &-main {
      min-width: auto;
      padding: 0 20px;
    }
  }
}
</style>




