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

const loadMorePokemons = async (limit, offset) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const newPokemons = response.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      return pokemonData.data;
    });
    const loadedPokemons = await Promise.all(newPokemons);
    store.state.pokemonsApi = [...store.state.pokemonsApi, ...loadedPokemons];
  } catch (error) {
    console.error("Erro ao carregar mais pokemons:", error);
  }
};

const onLoadNewPokemons = async () => {
  await loadMorePokemons(10, store.state.pokemonsApi.length);
};

useInfiniteScroll(
  el,
  () => {
    try {
      onLoadNewPokemons();
    } catch (error) {
      console.error("Erro ao carregar mais pokemons:", error);
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
