import { createStore } from "vuex";

export default createStore({
  state: {
    CurrentId: null,
    pokemons: [
      {
        id: 1,
        name: "Pikachu",
        habilidades: ["Choque", "Investida"],
        jogos: ["Ruby", "Diamond", "Saphira"],
        Evoluções: ["Raichu"],
        type: "Elétrico",
        images: [
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
          "https://turistandonline.files.wordpress.com/2017/06/pikachu.jpg",
          "https://www.shutterstock.com/shutterstock/photos/2426973581/display_1500/stock-vector-kudus-indonesia-february-pikachu-wearing-hoodie-jacket-in-pokemon-animation-cartoon-2426973581.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4DFER9WvnuBeKZaxv8ZJv8snbWm22S2ER4uRjLaPlQ&s",
        ],
      },
      {
        id: 2,
        name: "Bulbasaur",
        habilidades: ["Cipó", "Raio solar", "Investida"],
        jogos: ["Ruby", "Diamond", "Saphira"],
        Evoluções: ["Ivysaur", "Venusaur"],
        type: "Planta",
        images: [
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
          "https://media.crocs.com/images/t_B2B/f_auto%2Cq_auto/products/10010046_001_ALT100/crocs-pokemon-bulbasaur",
          "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/b/u/bulbasaur-min.jpg",
        ],
      },
      {
        id: 3,
        name: "Charmander",
        habilidades: ["Bola de fogo", "Labareda", "Investida"],
        jogos: ["Ruby", "Diamond", "Saphira"],
        Evoluções: ["Charmeleon", "Charizard"],
        type: "Fogo",
        images: [
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyP_7K_Oq4VsRPII4ygI2NIUtcVxyqrS0ePF5xp-Hmg&s",
          "https://m.media-amazon.com/images/I/51VLw2O+odL._AC_UF894,1000_QL80_.jpg",
          "https://w7.pngwing.com/pngs/9/929/png-transparent-pokemon-charmander-pikachu-pokemon-x-and-y-charmander-charizard-charmander-food-orange-vertebrate.png",
        ],
      },
    ]
  },
  getters: {},
  mutations: {
    setCurrentId(state, id) {
      state.CurrentId = id;
    }
  },
  actions: {},
});