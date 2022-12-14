import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[

    ]
  },
  {
    path: '/emoji',
    name: 'emoji',
    component: () => import( '../views/emoji/emoji.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
