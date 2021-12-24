import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    // name: "home",
    redirect: '/home',
    // component: () => import("../views/Home"),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home'),
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('../views/Setup'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
