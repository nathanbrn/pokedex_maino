<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

onMounted(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) => {
    const generics = response.data.results;
    generics.map((pokemon) => {
      axios.get(pokemon.url).then((response) => {
        const pokemon = response.data;

        const storePokemons = store.state.pokemonsApi;
        store.state.pokemonsApi = [...storePokemons, pokemon];
      })
    });
  }).catch((error) => {
    console.log(error);
  })
});

const pokemons = computed(() => {
  const allPokemons = store?.state?.pokemonsApi ?? [];

  const filteredPokemons = allPokemons.filter((pokemon) => {
    if (
      store.state.nameFilter &&
      !pokemon.name.includes(store.state.nameFilter)
    ) {
      return false;
    }

    if (
      store.state.idFilter &&
      pokemon.id.toString() !== store.state.idFilter
    ) {
      return false;
    }

    if (
      store.state.typeFilter &&
      !pokemon.types.find((type) => type.type.name === store.state.typeFilter)
    ) {
      return false;
    }

    if (
      store.state.speciesFilter &&
      pokemon.species.name !== store.state.speciesFilter
    ) {
      return false;
    }

    return true;
  });

  return filteredPokemons;
});

let nameFilter = "";
let idFilter = "";
let typeFilter = "";
let speciesFilter = "";

const filteredPokemons = computed(() => {
  return pokemons.value.filter((pokemon) => {
    const nameMatch = pokemon.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const idMatch = pokemon.id.toString().includes(idFilter);
    const typeMatch =
      !typeFilter ||
      pokemon.types.some((type) => type.type.name === typeFilter);
    const speciesMatch =
      !speciesFilter ||
      pokemon.species.name.toLowerCase().includes(speciesFilter.toLowerCase());
    return nameMatch && idMatch && typeMatch && speciesMatch;
  });
});

const openModal = (pokemonId) => {
  store.commit("setCurrentId", pokemonId);
  const modal = document.getElementById("exampleModal");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
};
</script>

<template>
  <div v-for="pokemon in filteredPokemons" :key="pokemon.id" class="card mt-4 mx-2 selected col"
    style="width: 12rem; cursor: pointer" @click="openModal(pokemon.id)" ref="listEl">
    <div>
      <div></div>
      <div class="p-3">
        <div>
          <img :src="pokemon.sprites.other.dream_world.front_default" class="d-block w-100" :alt="pokemon.name" />
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title text-center text-capitalize">{{ pokemon.name }}</h5>
    </div>
  </div>
</template>

<style scoped>
.selected {
  transition: all 0.2s ease-in-out;
}

.selected:hover {
  border: 3px solid rgb(108, 108, 197);
}
</style>
