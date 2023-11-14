<template>
  <div>
    <h1>게시글 목록 페이지</h1>
    <RouterLink :to="{ name: 'postcreate' }">
      [게시글 생성]
    </RouterLink>
    <div 
      v-for="post in store.posts"
      :key="post.id"
    >
      <p>{{ store.cateName(post.category) }}</p>
      <h3>{{ post.id }}번 글 ㅣ {{ post.title }}</h3>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios'
import { useCounterStore } from '@/stores/counter.js'

const store = useCounterStore()
onMounted(() => {
  store.getPosts()
})
</script>

<style scoped>

</style>