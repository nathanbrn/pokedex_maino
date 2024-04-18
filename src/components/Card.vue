<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const pokemons = computed(() => store.state.pokemons);

const openModal = (pokemonId) => {
  store.commit("setCurrentId", pokemonId);
  const modal = document.getElementById("exampleModal");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
};
</script>

<template>
  <div
    v-for="pokemon in pokemons"
    :key="pokemon.id"
    class="card mt-4 mx-2 selected col"
    style="width: 12rem; cursor: pointer"
    @click="openModal(pokemon.id)"
  >
    <div>
      <div></div>
      <div class="p-3">
        <div>
          <img
            :src="pokemon.sprites.other.dream_world.front_default"
            class="d-block w-100"
            :alt="pokemon.name"
          />
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title text-center text-capitalize">{{ pokemon.name }}</h5>
      <p v-for="typeP in pokemon.types">{{ typeP.type.name }}</p>
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
