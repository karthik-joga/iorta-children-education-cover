import Vue from 'vue'
import VueRouter from 'vue-router'
import ClaimDetails from '../views/ClaimDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ClaimDetails
  },
  {
    path: '/assess',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AssessmentSheet.vue')
  },
  {
    path:"/addassessment",
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddDetailsAssessment.vue')
  },
  {
    path: '/datagrid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DataGrid.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
