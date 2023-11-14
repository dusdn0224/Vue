<template>
  <h1>Detail Page</h1>
  <div v-if="article">
    <p>글 번호: {{ article.id }}</p>
    <p>제목: {{ article.title }}</p>
    <p>내용: {{ article.content }}</p>
    <p>작성 시간: {{ article.created_at }}</p>
    <p>수정 시간: {{ article.updated_at }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter';
import axios from 'axios'

const route = useRoute()
const store = useCounterStore()
const article = ref(null)

onMounted(() => {
  axios({
    method: 'get',
    url: `${store.API_URL}/api/v1/articles/${route.params.id}/`
  })
    .then((res) => {
      article.value = res.data
    })
    .catch(err => console.log(err))
})
</script>

<style>

</style>
