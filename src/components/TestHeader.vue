<script setup>

</script>

<template>
<!--  <div>-->
<!--    <div>-->
<!--      <router-link to="/">-->
<!--        <h1>Название</h1>-->
<!--      </router-link>-->
<!--    </div>-->
<!--    <nav>-->
<!--      <ul>-->
<!--        <li>-->
<!--          <router-link to="/catalog">Каталог</router-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link to="/profile">Профиль</router-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->
<!--  </div>-->

  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <router-link class="nav-link px-2 link-dark" to="/catalog">каталог</router-link>
        </li>
        <li>
          <router-link class="nav-link px-2 link-dark" to="/profile">профиль</router-link>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>