<script setup>
import NavBar from "./components/NavBar.vue";
import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";

</script>

<template>
  <NavBar />
  <div class="container">
    <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <Card />
      <Modal />
    </div>
  </div>
</template>
