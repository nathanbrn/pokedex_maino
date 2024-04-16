<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand permanent-marker-regular" href="#">
        <img width="20px" src="../assets/pokebola.png" alt="">
        Pokedex
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <form class="d-flex">
            <div class="input-group me-2 nav-item">
              <span class="input-group-text">Nome</span>
              <input type="text" class="form-control" />
            </div>
            <div class="input-group me-2 nav-item">
              <span class="input-group-text">ID</span>
              <input type="text" class="form-control" />
            </div>
            <div class="input-group nav-item">
              <label class="input-group-text">Espécie</label>
              <select class="form-select">
                <option value="">Selecione...</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Pássaro">Pássaro</option>
              </select>
            </div>
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  ul {
    margin-top: 8px;
  }
</style>
