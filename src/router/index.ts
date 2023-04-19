import { createRouter, createWebHistory } from 'vue-router'
import TodayPokemon from "@/views/TodayPokemon.vue";
import ExampleGame from "@/views/ExampleGame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/example',
      name: 'example',
      component: ExampleGame
    },
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