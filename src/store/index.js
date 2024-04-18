import { createStore } from "vuex";
import axios from "axios";

let pokemons = [];

const getPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    const { data } = response;
    const { results } = data;
    return results;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};



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
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
      {
        abilities: [],
        base_experience: null,
        cries: {},
        forms: [],
        games_indices: [
          {
            game_index: 153,
            version: {
              name: "red",
              url: "https://pokeapi.co/api/v2/version-group/red/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "blue",
              url: "https://pokeapi.co/api/v2/version-group/blue/"
            }
          },
          {
            game_index: 153,
            version: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/yellow/"
            }
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
              url: "https://pokeapi.co/api/v2/move/13/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "swords-dance",
              url: "https://pokeapi.co/api/v2/move/14/"
            },
            version_group_details: []
          },
          {
            move: {
              name: "cut",
              url: "https://pokeapi.co/api/v2/move/15/"
            },
            version_group_details: []
          },
        ],
        name: "bulbasaur",
        order: null,
        species: {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon-species/1/"
        },
        sprites: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          back_female: null,
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/back-shiny.svg",
          back_shiny_female: null,
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-default.svg",
          front_female: null,
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/front-shiny.svg",
          front_shiny_female: null,
          other: {
            dream_world: {
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              front_female: null,
            }
          },
          home: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
            front_shiny_female: null
          },
          official_artwork: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"
          },
          shotdown: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
            back_female: null,
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
            back_shiny_female: null,
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
            front_female: null,
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
            front_shiny_female: null
          }
        },
        versions: {},
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: "grass",
              url: "https://pokeapi.co/api/v2/type/12/"
            }
          },
          {
            slot: 2,
            type: {
              name: "poison",
              url: "https://pokeapi.co/api/v2/type/4/"
            }
          }
        ],
        weight: null,
      },
    ],
    nameFilter: '',
    idFilter: '',
    typeFilter: '',
    speciesFilter: '',
  },
  getters: {},
  mutations: {
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
  },
  actions: {},
});