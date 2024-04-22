import { createStore } from "vuex";

export default createStore({
  state: {
    language: null,
    CurrentId: null,
    pokemons: [],
    pokemonsApi: [],
    nameFilter: null,
    idFilter: null,
    typeFilter: null,
    speciesFilter: null,
    evolutions: [],
    loading: true,
    limit: 20,
  },
  getters: {},
  mutations: {
    setLanguage(state, language) {
      state,language = language;
    },
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setCurrentId(state, id) {
      state.CurrentId = id;
    },
    setPokemonCurrent(state, pokemon) {
      state.pokemonCurrent = pokemon;
    },
    setNameFilter(state, value) {
      state.nameFilter = value;
    },
    setIdFilter(state, value) {
      state.idFilter = value;
    },
    setTypeFilter(state, value) {
      state.typeFilter = value;
    },
    setSpeciesFilter(state, value) {
      state.speciesFilter = value;
    },
    setEvolutions(state, value) {
      state.evolutions = value;
    },
  },
  actions: {},
});