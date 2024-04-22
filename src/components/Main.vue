<script setup>
import Card from "./Card.vue";
import Modal from "./Modal.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

store.state.limit = 30;

const loadMorePokemons = async (limit) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const newPokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return pokemonData.data;
      })
    );

    store.state.pokemonsApi = newPokemons;
  } catch (error) {
    console.error(error);
  }
};

const onLoadNewPokemons = async () => {
  await loadMorePokemons(store.state.limit);
  store.state.limit += 10;
};

onMounted(() => {
  document.getElementById("scrollContainer").addEventListener(
    "scroll",
    (event) => {
      const element = event.target;

      const scrollPosition = element.scrollTop + element.clientHeight;
      const scrollHeight = element.scrollHeight - 20;

      if (scrollPosition >= scrollHeight) {
        store.state.loading = false;
        onLoadNewPokemons();

        store.state.loading = true;
      }
    },
    false
  );
});
</script>

<template>
  <div
    id="scrollContainer"
    v-if="store.state.language"
    class="overflow-y-scroll h-100 overflow-x-hidden px-4 py-5"
  >
    <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <Card />
      <Modal />
    </div>
    <div class="d-flex align-items-center justify-content-center h-25">
      <div class="spinner-border text-secondary" role="status" v-if="store.state.loading">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
