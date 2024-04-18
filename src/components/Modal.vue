<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const pokemons = computed(() => store.state.pokemons);
const currentId = computed(() => store.state.CurrentId);

const currentPokemon = computed(() =>
  pokemons.value.find((pokemon) => pokemon.id === currentId.value)
);
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <img
            width="20rem"
            class="me-2"
            :src="currentPokemon?.sprites.other.dream_world.front_default"
            alt=""
          />
          <h1 class="modal-title fs-5 text-capitalize" id="exampleModalLabel">
            {{ currentPokemon?.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card mb-3">
            <!-- <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div
                  v-for="image in currentPokemon?.images"
                  class="carousel-item active"
                >
                  <img :src="image" class="card-img-top" :alt="currentPokemon?.name" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> -->

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Last updated 3 mins ago</small
                >
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
