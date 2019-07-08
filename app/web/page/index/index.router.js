import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('@/component/common/HomePage')
const LetterPage = () => import('@/component/common/LetterPage')


Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/letter',
      name: 'LetterPage',
      component: LetterPage
    }
  ]
})