import { createRouter, createWebHistory } from 'vue-router'
import TodayPokemon from "@/views/TodayPokemon.vue";
import ExampleGame from "@/views/ExampleGame.vue";
import PokemonGame from "@/views/PokemonGame.vue";

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
      component: PokemonGame
    },
    {
      path : '/today_pokemon',
      name: 'todayPokemon',
      component : () => TodayPokemon
    }
  ]
})

export default router