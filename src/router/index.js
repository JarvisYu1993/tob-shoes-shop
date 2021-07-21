import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/fronted/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/fronted/index.vue'),
      },
      {
        path: 'products/:category',
        name: 'Category',
        component: () => import('../views/fronted/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/fronted/Product.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/fronted/About.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/fronted/Cart.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/fronted/Checkout.vue'),

  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import('../views/fronted/Order.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashaboard',
    name: 'Dashaboard',
    component: () => import('../views/Dashaboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue'),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/backend/Coupon.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
