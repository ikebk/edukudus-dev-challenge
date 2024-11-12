const routes = [
  {
    id: "HomeView",
    name: 'home',
    path: '/',
    meta: {}
  },
  {
    id: "ProductsView",
    name: 'products',
    path: '/products',
    meta: {}
  },
  {
    id: "ProductView",
    name: 'product',
    path: '/product/:id?',
    meta: {}
  }
]

export default routes