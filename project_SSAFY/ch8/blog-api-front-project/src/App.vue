<template>
  <div>
    <nav class="navbar">
      <RouterLink :to="{ name: 'main' }">Home</RouterLink>
      <RouterLink :to="{ name: 'postlist' }">PostList</RouterLink>
      <RouterLink :to="{ name: 'catecreate' }">CategoryCreate</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-evenly;
}
</style>
