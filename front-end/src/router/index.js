import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomiesView from '../views/HomiesView.vue'
import ProConView from '../views/ProConView.vue'
// import FavesView from '../views/FavesView.vue'
import QuotesView from '../views/QuotesView.vue'
import QuotesGameView from '../views/QuotesGameView.vue'
import ContactView from '../views/ContactView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homies',
    name: 'homies',
    component: HomiesView
  },
  {
    path: '/pro-con',
    name: 'pro-con',
    component: ProConView
  },
  // {
  //   path: '/faves',
  //   name: 'faves',
  //   component: FavesView
  // },
  {
    path: '/quotesGame',
    name: 'quotesGame',
    component: QuotesGameView
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: QuotesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
