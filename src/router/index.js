/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2021-02-23 11:57:12
 * @LastAuthor: lizlong
 * @lastTime: 2021-03-05 09:46:13
 */
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
    path: '/view/:id',
    name: 'View',
    component: () => import('../views/View.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
