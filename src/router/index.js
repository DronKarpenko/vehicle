import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";
// import PageNotFound from "@/views/404";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/:catchAll(.*)',
    name: '404-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
  {
    path: '/about',
    name: 'about-page',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts-page',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/rates',
    name: 'rates-page',
    component: () => import('../views/RatesView.vue')
  },
  {
    path: '/video',
    name: 'video-page',
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/blog',
    name: 'blog-page',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/calculate',
    name: 'calculate-page',
    component: () => import('../views/CalculateView.vue')
  },
  {
    path: '/terms',
    name: 'terms-page',
    component: () => import('../views/TermsView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy-page',
    component: () => import('../views/PrivacyView.vue')
  },
  {
    path: '/one-blog',
    name: 'one-blog-page',
    component: () => import('../views/OneBlogPage.vue')
  },
  {
    path: '/inventory',
    name: 'inventory-page',
    component: () => import('../views/InventoryPage.vue')
  },
  {
    path: '/one-car',
    name: 'one-car-page',
    component: () => import('../views/OneCarPage.vue')
  },
  {
    path: '/request',
    name: 'request-a-car',
    component: () => import('../views/RequestPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
