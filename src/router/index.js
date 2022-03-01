import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/it',
    name:'It',
    component:()=> import('../views/ItEducation'),
    meta:{
      layout:'ItEducation'
    }
  },
  {
    path: '/languageeducation',
    name:'languageeducation',
    component: ()=>import('../views/languageEducation'),
    meta:{
      layout: 'LanguageEducation'
    }
  },
  {
    path: '/studyabroad',
    name:'StudyAbroad',
    component: ()=>import('../views/StudyAbroad'),
    meta:{
      layout: 'StudyAbroad'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
