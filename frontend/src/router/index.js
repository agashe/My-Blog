import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
  },
  {
    path: '/article/:title',
    name: 'Article',
    component: () => import("@/views/Article.vue"),
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import("@/views/Books.vue"),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/About.vue"),
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
