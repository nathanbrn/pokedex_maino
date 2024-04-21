<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

let language = ref(null);
const onChangeLanguage = (event) => {
  language.value = event.target.value;
}

const handleUpdateLanguage = (event) => {
  store.state.language = language.value;
}
</script>

<template>
  <div class="centralizar">
    <select class="form-select tamanho mb-2" aria-label="Default select example" @change="onChangeLanguage">
      <option selected>Selecione...</option>
      <option value="en">en</option>
      <option value="es">es</option>
      <option value="pt-BR">pt</option>
      <option value="ja">ja</option>
    </select>
    <button type="button" class="btn btn-primary btn-lg" @click="handleUpdateLanguage">Selecionar</button>
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
</style>