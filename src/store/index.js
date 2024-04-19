import { createStore } from "vuex";

export default createStore({
  state: {
    CurrentId: null,
    pokemons: [
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        game_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/",
            },
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/",
            },
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/",
            },
          },
        ],
        height: null,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters: [],
        moves: [
          {
            move: {
              name: "razor-wind",
              url: "https://pokeapi.co/api/v2/move/13/",
            },
            version_group_details: [],
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/",
            },
            version_group_details: [],
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/",
            },
            version_group_details: [],
          },
        ],
        name: "bulbasaur",
        order: null,
        past_abilities: [],
        past_types: [],
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/",
        },
        sprites: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            },
          },
          home: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null,
          },
          official_artwork: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
          },
          shotdown: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null,
          },
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/",
            },
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/",
            },
          },
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        game_indices: [
          {
            game_index: 176,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version/1/",
            },
          },
          {
            game_index: 176,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version/2/",
            },
          },
          {
            game_index: 176,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version/3/",
            },
          },
        ],
        height: null,
        held_items: [],
        id: 4,
        is_default: true,
        location_area_encounters: [],
        moves: [
          {
            move: {
              name: "mega-punch",
              url: "https://pokeapi.co/api/v2/move/5/",
            },
            version_group_details: [],
          },
          {
            move: {
              name: "fire-punch",
              url: "https://pokeapi.co/api/v2/move/7/",
            },
            version_group_details: [],
          },
          {
            move: {
              name: "thunder-punch",
              url: "https://pokeapi.co/api/v2/move/9/",
            },
            version_group_details: [],
          },
        ],
        name: "charmander",
        order: null,
        past_abilities: [],
        past_types: [],
        species: {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon-species/4/",
        },
        sprites: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
              front_female: null,
            },
          },
          home: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png",
            front_shiny_female: null,
          },
          official_artwork: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png",
          },
          shotdown: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/4.gif",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/4.gif",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/4.gif",
            front_shiny_female: null,
          },
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "fire",
              url: "https://pokeapi.co/api/v2/type/10/",
            },
          },
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        game_indices: [
          {
            game_index: 176,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version/1/",
            },
          },
          {
            game_index: 176,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version/2/",
            },
          },
          {
            game_index: 176,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version/3/",
            },
          },
        ],
        height: null,
        held_items: [],
        id: 7,
        is_default: true,
        location_area_encounters: [],
        moves: [
          {
            move: {
              name: "mega-punch",
              url: "https://pokeapi.co/api/v2/move/5/",
            },
            version_group_details: [],
          },
          {
            move: {
              name: "ice-punch",
              url: "https://pokeapi.co/api/v2/move/8/",
            },
            version_group_details: [],
          },
          {
            move: {
              name: "mega-kick",
              url: "https://pokeapi.co/api/v2/move/25/",
            },
            version_group_details: [],
          },
        ],
        name: "squirtle",
        order: null,
        past_abilities: [],
        past_types: [],
        species: {
          name: "squirtle",
          url: "https://pokeapi.co/api/v2/pokemon-species/7/",
        },
        sprites: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
              front_female: null,
            },
          },
          home: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png",
            front_shiny_female: null,
          },
          official_artwork: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png",
          },
          shotdown: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/7.gif",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/7.gif",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/7.gif",
            front_shiny_female: null,
          },
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "water",
              url: "https://pokeapi.co/api/v2/type/11/",
            },
          },
        ],
        weight: null,
      },
    ],
    nameFilter: '',
    idFilter: '',
    typeFilter: '',
    speciesFilter: '',
    evolutions: [],
  },
  getters: {},
  mutations: {
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