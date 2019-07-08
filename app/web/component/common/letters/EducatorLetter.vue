<template>
  <div class="educator-letter">
    <div class="educator-letter-title">
      <img class="educator-letter-box-left" src="@/asset/images/box2.png" alt="">
      To Educators
      <img class="educator-letter-box-right" src="@/asset/images/box2.png" alt="">
    </div>
    <div class="educator-letter-content">
      <p>Learning starts with interests. If the student starts on some subject, it is better if the student has already some experiences of the related content in his/her real life. For example, if the student comes from an engineer or scientist family, s/he is already familiar with numbers and related concepts, his/her family often watching discovery channel together, parents often talking about engineering or scientific concepts and thinking methodologies, the student is already immersed in an engineering or scientific environment. It will be easy for this student to relate to the content of subjects like mathematics, physics, chemistry, and other STEM subjects. While students not coming from such a family background feel baffled with the STEM content that they have to learn. Similarly students coming from families that parents are involved with arts works find it easy to relate to arts related subjects since they are already immersed in such concepts like story telling, designing, etc.</p>
      <p>In paracraft, we aim to create a parallel world where everyone can create their own games or creative 3D works. We call such a world with the coined name “ParaWorld”. Paracraft is a very expressive and powerful tool that people can use to create all kinds of complex 3D works. Our users’ works have demonstrated this very clearly.</p>
      <p>As a former biology student, when I was studying biology in school, the textbook used large paragraph of text to just describe what the cell or tissue looks like. You spent time reading it and tried to imagine what it is really like. It is very time consuming. Most of the time is wasted in such things. In American graduate schools, we have large text books with beautiful colorful pictures. That is much better. You see quite immediately what it looks like and it saves tons of time. What can be even better, is that we can create, for example, 3D model of the cell, and you can enter the membrane of the cell, and swim around inside the cell, enter cell organelles and interact with them. We believe paracraft can play a great role in teaching of biology by having teachers and students creating 3D worlds, movies, and games.</p>
      <p>Taking learning of history as another example. One idea is to have a world map and an axis of time. You can move timer along the axis, and the map will be updated with events around the world at that time. You click on an event, an information window will show up, giving you info about this event, probably with a wikipedia entry link. Paracraft makes it easy to create such 3D works. Teaching of various subjects can be totally different with paracraft.</p>
      <p>So this is an exciting time. We are able to use paracraft to create a parallel 3D world that brings before us things that are usually invisible to us, and you can touch and interact with them. Time and space far away, things hidden, too small to see, too big to imagine, all right here before us. You can learn of atoms and electrons, planets, starts, galaxies and constellations this way.</p>
      <p>Learning appears to be trivia if you can play with it. The responsibility of educators in the future education would not be very much about teaching a course, but would lie in mostly two parts: one being creating these 3D worlds or other things that learners can play with them richly; the other being providing just in-time mentorship when the learner need.</p>
      <p>And it is also a lot of fun doing it, don’t you think so?</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EducatorLetter'
}
</script>
<style lang="scss" scoped>
.educator-letter {
  &-title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
  &-box {
    &-left {
      vertical-align: unset;
      margin-right: 16px;
    }
    &-right {
      vertical-align: unset;
      margin-left: 16px;
    }
  }
}
</style>
