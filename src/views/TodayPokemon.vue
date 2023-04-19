<template>
  <div class="about">
    <h1>Who's That Pokémon?</h1>
    <input @click="pintarVitrina" value="GET" type="button">


    <h3 v-if="name !== ''">{{name}}</h3>
    <img v-if="imgUrl !== ''" :src="imgUrl"/>
  </div>
</template>


<script setup>
import {ref} from "vue";

const total_pokemons = 500;
const imgUrl = ref('')
const name = ref('')

const getRandomArbitrary = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const pintarVitrina = () =>{
  let random =getRandomArbitrary(1,total_pokemons);
  traerDatos(random);
}

const traerDatos = (id) =>{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(function(data){
        name.value = data.name;
        imgUrl.value = data.sprites.other.dream_world.front_default;
      });
}
</script>

<style>
.about {
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: bold;
  color: white;
}
</style>s