<template>
  <div class="box">
    <Game/>
  </div>
</template>

<script setup>
import Game from "@/components/PokemonGame.vue";
</script>

<style scoped>
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.box{
  text-align: center;
  margin-top:100px
}
</style>