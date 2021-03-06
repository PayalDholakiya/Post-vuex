import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import ViewDetails from '../views/ViewDetails.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },

  {
    path: '/detail/:id',
    name: 'View',
    component: ViewDetails,
  },
  {
    path: '/profile/:id/:user',
    name: 'Profile',
    component: Profile,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
