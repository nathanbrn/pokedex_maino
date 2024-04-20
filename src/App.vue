<script setup>
import NavBar from "./components/NavBar.vue";
import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";
import axios from "axios";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

// let pokemonsApi = [];
// onMounted(() => {
//   axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((response) => {
//   const generics = response.data.results;
//   generics.map((pokemon) => {
//     axios.get(pokemon.url).then((response) => {
//       const pokemon = response.data;

//       pokemonsApi.push(pokemon);
//     })
//   });
// }).catch((error) => {
//   console.log(error);
// });

// store.commit("setPokemons", pokemonsApi);
// });

// console.log(store.state.pokemonsApi);
</script>

<template>
  <NavBar />
  <div class="container">
    <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <Card />
      <Modal />
    </div>
  </div>
</template>
