<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";
import Language from "./components/Language.vue";
import { useStore } from "vuex";
import { useInfiniteScroll } from "@vueuse/core";
import axios from "axios";

const store = useStore();

const el = ref(null);
let limit = 30;

const loadMorePokemons = async (limit) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const newPokemons = await Promise.all(response.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      return pokemonData.data;
    }));

    store.state.pokemonsApi = newPokemons;
  } catch (error) {
    console.error(error);
  }
};

const onLoadNewPokemons = async () => {
  await loadMorePokemons(limit);
};

useInfiniteScroll(
  el,
  () => {
    try {
      onLoadNewPokemons();
      limit += 10;
    } catch (error) {
      console.error(error);
    }
  },
  { distance: 10 }
);
</script>

<template>
  <NavBar v-if="store.state.language" />
  <div ref="el" v-if="store.state.language" class="container">
    <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <Card />
      <Modal />
    </div>
  </div>
  <Language v-if="!store.state.language" />
</template>
