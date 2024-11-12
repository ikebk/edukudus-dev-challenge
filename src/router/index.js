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
  routes: [...loadRoutes(routes)],
})

export default router
