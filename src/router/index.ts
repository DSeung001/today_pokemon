import { createRouter, createWebHistory } from 'vue-router'
import TodayPokemon from "@/views/TodayPokemon.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodayPokemon
    },
    {
      path : '/today_pokemon',
      name: 'todayPokemon',
      component : () => TodayPokemon
    }
  ]
})

export default router
