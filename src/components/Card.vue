<template>
  <div class="card mt-4" style="width: 20rem">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner p-3">
        <div class="carousel-item active">
          <img
            src="https://turistandonline.files.wordpress.com/2017/06/pikachu.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2426973581/display_1500/stock-vector-kudus-indonesia-february-pikachu-wearing-hoodie-jacket-in-pokemon-animation-cartoon-2426973581.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4DFER9WvnuBeKZaxv8ZJv8snbWm22S2ER4uRjLaPlQ&s"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body">
      <h5 class="card-title text-center">Pikachu</h5>
      <br />
      <div class="container">
        <div class="row">
          <div class="col">
            <ul>
              <h6>Habilidades</h6>

              <li>Choque</li>
              <li>Investida</li>
            </ul>
          </div>

          <div class="col">
            <ul>
              <h6>Evoluções</h6>
              <li>Raichu</li>
            </ul>
          </div>

          <div class="col">
            <ul>
              <h6>Jogos</h6>
              <li>Ruby</li>
              <li>Diamond</li>
              <li>Saphira</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
