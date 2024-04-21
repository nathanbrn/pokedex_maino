<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const pokemons = computed(() => store.state.pokemonsApi);

const updateNameFilter = (event) => {
  store.commit('setNameFilter', event.target.value);
};

const updateIdFilter = (event) => {
  store.commit('setIdFilter', event.target.value);
};

const updateTypeFilter = (event) => {
  store.commit('setTypeFilter', event.target.value);
};

const updateSpeciesFilter = (event) => {
  store.commit('setSpeciesFilter', event.target.value);
};

const onChangeIdioma = () => {
  window.location.reload();
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand permanent-marker-regular" style="cursor: default" href="">
        <img width="20px" src="../assets/pokebola.png" alt="" />
        Pokedex
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <form class="d-flex">
            <div class="input-group me-2 nav-item">
              <span class="input-group-text">Nome</span>
              <input type="text" class="form-control" @input="updateNameFilter" />
            </div>
            <div class="input-group me-2 nav-item">
              <span class="input-group-text">ID</span>
              <input type="text" class="form-control" @input="updateIdFilter" />
            </div>
            <div class="input-group me-2 nav-item">
              <label class="input-group-text">Tipo</label>
              <select class="form-select text-capitalize" @change="updateTypeFilter">
                <option value="" selected>Todos</option>
                <template v-for="pokemon in pokemons">
                  <option v-for="typeP in pokemon.types" :key="pokemon.id" :value="typeP.type.name"
                    class="text-capitalize">
                    {{ typeP.type.name }}
                  </option>
                </template>
              </select>
            </div>
            <div class="input-group nav-item me-2">
              <label class="input-group-text">Espécie</label>
              <select class="form-select text-capitalize" @change="updateSpeciesFilter">
                <option value="" selected>Todos</option>
                <option v-for="pokemon in pokemons" :key="pokemon.id" :value="pokemon.species.name"
                  class="text-capitalize">
                  {{ pokemon.species.name }}
                </option>
              </select>
            </div>
            <div class="input-group nav-item me-2">
              <button type="button" class="btn btn-secondary" @click="onChangeIdioma">Trocar idioma</button>
            </div>
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
ul {
  margin-top: 8px;
}
</style>
