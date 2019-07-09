<template>
  <div class="letter-page">
    <div class="letter-page-box">
      <div class="letter-page-bg-center"></div>
      <div class="letter-page-bg-border"></div>
      <img class="letter-page-seal" src="@/asset/images/seal.png" alt="">
      <parent-letter class="letter-page-content" v-if="letterType === 'parent'"></parent-letter>
      <founder-letter class="letter-page-content" v-if="letterType === 'founder'"></founder-letter>
      <educator-letter class="letter-page-content" v-if="letterType === 'educator'"></educator-letter>
    </div>
  </div>
</template>
<script>
import ParentLetter from './letters/ParentLetter'
import FounderLetter from './letters/FounderLetter'
import EducatorLetter from './letters/EducatorLetter'
export default {
  name: 'LetterPage',
  computed: {
    letterType() {
      return this.$route.query.type
    }
  },
  components: {
    ParentLetter,
    FounderLetter,
    EducatorLetter
  }
}
</script>
<style lang="scss" scoped>
.letter-page {
  background-color: #f5f5f5;
  padding: 72px 0;
  &-box {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    padding: 100px 80px;
    font-family: 'Times New Roman';
    position: relative;
    background-color: #fff;
    font-style: italic;
    &:before {
      content: '';
      position: absolute;
      left: 56px;
      right: 56px;
      top: 56px;
      bottom: 56px;
      box-shadow: 0 0 0 4px #ac805a, 0 0 0 12px #fff, 0 0 0 26px #ac805a;
    }
  }
  &-bg-center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(../../asset/images/letter-center.png);
  }
  &-bg-border {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 20px;
    bottom: 20px;
    border: 40px solid transparent;
    border-image: url(../../asset/images/letter-border.png) 60 repeat;
  }
  &-seal {
    position: absolute;
    right: 56px;
    bottom: 56px;
  }
  &-content {
    position: relative;
  }
}
</style>
