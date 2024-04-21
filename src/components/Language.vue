<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let language = ref(null);
const onChangeLanguage = (event) => {
  try {
    language.value = event.target.value;
    store.state.language = language.value;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="centralizar">
    <h4>Selecione um idioma para os nomes dos pokemons</h4>
    <select
      class="form-select tamanho mb-2"
      aria-label="Default select example"
      @change="onChangeLanguage"
    >
      <option selected>Selecione...</option>
      <option value="en">Inglês-EN</option>
      <option value="es">Espanhol-ES</option>
      <option value="pt-BR">Português-BR</option>
      <option value="ja">Japonês-JA</option>
    </select>
    <span class="textMin">OBS: Apenas os nomes serão traduzidos</span>
  </div>
</template>

<style scoped>
.centralizar {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tamanho {
  width: 200px;
}

.textMin {
  font-size: 12px;
}
</style>
