<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";
import Language from "./components/Language.vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

let limit = 30;
let loading = true;

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
  await loadMorePokemons(limit);
  limit += 10;
};

setInterval(() => {
  loading = false;
  onLoadNewPokemons();

  loading = true;
}, 5000);

// import { useInfiniteScroll } from "@vueuse/core";

// const el = ref(null);
// useInfiniteScroll(
//   el,
//   () => {
//     try {
//       onLoadNewPokemons();
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   { distance: 10 }
// );
</script>

<template>
  <NavBar v-if="store.state.language" />
  <div id="scrollContainer" v-if="store.state.language" class="container">
    <div
      class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 border-1 border-black"
    >
      <Card />
      <Modal />
    </div>
  </div>
  <div
    v-if="store.state.language"
    class="w-100 d-flex justify-content-center align-items-center my-3"
  >
    <!-- <button
      v-if="store.state.language"
      type="button"
      class="btn btn-outline-primary w-100 h-100"
      @click="onLoadNewPokemons"
    >
      Carregar mais pokemons...
    </button> -->
    <img
      width="50"
      v-if="loading"
      src="./assets/loading.gif"
      alt=""
    />
  </div>
  <Language v-if="!store.state.language" />
</template>
