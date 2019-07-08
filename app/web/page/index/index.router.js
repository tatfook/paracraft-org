import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('@/component/common/HomePage')
const Contact = () => import('@/component/Contact')
const LetterPage = () => import('@/component/common/LetterPage')
const WhoWeAre = () => import('@/component/WhoWeAre')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/letter',
      name: 'LetterPage',
      component: LetterPage
    },
    {
      path: '/whoWeAre',
      name: 'WhoWeAre',
      component: WhoWeAre
    }
  ]
})
