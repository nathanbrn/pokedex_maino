<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const pokemons = computed(() => store.state.pokemonsApi);
const currentId = computed(() => store.state.CurrentId);

let urlEvolution = null;

const currentPokemon = computed(() => {
  const pokemon = pokemons.value.find(
    (pokemon) => pokemon.id === currentId.value
  );

  if (currentId.value) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${currentId.value}/`)
      .then((response) => {
        urlEvolution = response.data.evolution_chain.url;
      });
  }

  return pokemon;
});

const refNameEvolution = ref(null);

const evolutions = computed(() => store.state.evolutions);

// Requisição para obter evoluções quando currentId mudar
watch(currentId, (newId) => {
  if (newId) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${newId}/`)
      .then((response) => {
        urlEvolution = response.data.evolution_chain.url;
        if (urlEvolution) {
          axios
            .get(urlEvolution)
            .then((response) => {
              refNameEvolution.value = response.data.chain.species.name;
              const evolutionsPokemon = [];
              if (response.data.chain?.evolves_to[0]?.species?.name !== undefined)
                evolutionsPokemon.push(
                  response.data.chain?.evolves_to[0]?.species?.name
                );
              if (response.data.chain?.evolves_to[0]?.evolves_to[0]?.species?.name !== undefined)
                evolutionsPokemon.push(
                  response.data.chain?.evolves_to[0]?.evolves_to[0]?.species?.name
                );

              store.commit("setEvolutions", evolutionsPokemon);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <img width="30rem" class="me-2" :src="currentPokemon?.sprites.other.showdown.front_default" alt="" />
          <h1 class="modal-title fs-5 text-capitalize" id="exampleModalLabel">
            {{ currentPokemon?.name }}
          </h1>
          <img width="30rem" class="ms-2" :src="currentPokemon?.sprites.other.showdown.back_default" alt="" />
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card mb-3">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img :src="currentPokemon?.sprites.other.dream_world.front_default
                    " class="card-img-top" :alt="currentPokemon?.name" />
                </div>
                <div class="carousel-item">
                  <img :src="currentPokemon?.sprites.other.home.front_default" class="card-img-top"
                    :alt="currentPokemon?.name" />
                </div>
                <div class="carousel-item">
                  <img :src="currentPokemon?.sprites.other['official-artwork'].front_default" class="card-img-top"
                    :alt="currentPokemon?.name" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div class="card-body">
              <div>
                <img class="my-3 me-1" width="70rem" :src="currentPokemon?.sprites.back_default" />
                <img class="my-3 me-1" width="70rem" :src="currentPokemon?.sprites.back_shiny" />
                <img class="my-3 me-1" width="70rem" :src="currentPokemon?.sprites.front_default" />
                <img class="my-3 me-1" width="70rem" :src="currentPokemon?.sprites.front_shiny" />
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Movimentos de ataque
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul>
                        <li v-for="move in currentPokemon?.moves" class="card-text text-capitalize">
                          {{ move.move.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Evoluções
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul>
                        <li class="text-capitalize">
                          1 - {{ refNameEvolution }}
                        </li>
                        <li class="text-capitalize" v-for="(evolution, index) in evolutions" :key="index">
                          {{ `${index + 2} - ${evolution}` }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Games
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul>
                        <li v-for="(game, index) in currentPokemon?.game_indices" :key="index"
                          class="card-text text-capitalize">
                          {{ game.version.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
