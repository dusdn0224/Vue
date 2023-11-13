<template>
  <div>
    <nav>
      <ul class="navbar">
        <RouterLink :to="{ name: 'home' }" class="nav-item">Home</RouterLink>
        <RouterLink :to="{ name: 'products' }" class="nav-item">Products</RouterLink>
        <RouterLink :to="{ name: 'favorite' }" class="nav-item">
          Favorite <span class="like-count">{{ productstore.likeProducts.length }}</span>
        </RouterLink>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './stores/product';

const productstore = useProductStore()

</script>

<style scoped>
.navbar {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  height: 50px;
}
.nav-item {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}
.like-count {
  background-color: red;
  border: 1px solid red;
  border-radius: 50%;
}
</style>