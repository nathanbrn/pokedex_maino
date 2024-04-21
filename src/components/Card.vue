<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { useInfiniteScroll } from "@vueuse/core";

const store = useStore();
let limit = 100;
const el = ref < HTMLElement | null > (null)

onMounted(() => {
  loadPokemons();

  //   document.getElementById("el").addEventListener("scroll", async (event) => {
  //     let element = event.target;

  //     const scrollPosition = element.scrollTop + element.clientHeight;
  //     const scrollLimit = element.scrollHeight - 20;

  //     if (scrollPosition >= scrollLimit) {
  //       console.log("Chegou ao final");
  //     }
  //   });
});

const loadPokemons = async () => {

  await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then((response) => {
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
  });
}

const loadMorePokemons = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const newPokemons = response.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      return pokemonData.data;
    });
    const loadedPokemons = await Promise.all(newPokemons);
    store.state.pokemonsApi = [...store.state.pokemonsApi, ...loadedPokemons];
  } catch (error) {
    console.error('Erro ao carregar mais pokemons:', error);
  }
};

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

  const languageCode = computed(() => store.state.language);
  filteredPokemons.map(async (pokemon, index) => {
    const translatedName = await translatePokemonName(pokemon.id, languageCode.value);
    filteredPokemons[index].name = translatedName;
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

useInfiniteScroll(
  el,
  () => {
    loadMorePokemons();
    console.log(filteredPokemons.value.length);
  }, { distance: 10 });

async function getPokemonSpeciesData(pokemonId) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os dados da espécie do Pokémon:', error);
    return null;
  }
}

async function translatePokemonName(pokemonId, languageCode) {
  const pokemonSpeciesData = await getPokemonSpeciesData(pokemonId);
  if (!pokemonSpeciesData) {
    return null;
  }

  const nameObject = pokemonSpeciesData.names.find(name => name.language.name === languageCode);
  if (!nameObject) {
    return pokemonSpeciesData.name;
  }

  return nameObject.name;
}
</script>

<template>
  <div ref="el" v-for="pokemon in filteredPokemons" :key="pokemon.id" class="card mt-4 mx-2 selected col"
    style="width: 12rem; cursor: pointer" @click="openModal(pokemon.id)">
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
