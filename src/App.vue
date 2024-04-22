<script setup>
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import Language from "./components/Language.vue";
import { useStore } from "vuex";
import Main from "./components/Main.vue";

const store = useStore();

onMounted(() => {
  store.state.language = localStorage.getItem("language");
});
</script>

<template>
  <NavBar v-if="store.state.language" />
  <Main v-if="store.state.language" />
  <Language v-if="!store.state.language" />
</template>
