<script setup>
defineProps({
  pokemons: Array,
});

const openModal = () => {
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
    @click="openModal"
  >
    <div>
      <div></div>
      <div class="p-3">
        <div>
          <img
            :src="pokemon.images[0]"
            class="d-block w-100"
            :alt="pokemon.name"
          />
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title text-center">{{ pokemon.name }}</h5>
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