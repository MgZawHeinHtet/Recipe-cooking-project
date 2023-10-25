import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import MenuPage from "../views/MenuPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      component : HomePage
    },
   {
    path : '/menu',
    component : MenuPage
   }
  ]
})

export default router
