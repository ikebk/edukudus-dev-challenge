import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/routes'

const loadRoutes = (routes = []) => {
  const results = []

  routes.forEach((route) => {
    results.push({
      path: route.path,
      name: route.name,
      component: () => import(`../views/${route.id}.vue`),
    })
  })

  return results
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    ...loadRoutes(routes),
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
