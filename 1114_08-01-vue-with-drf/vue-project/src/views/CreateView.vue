<template>
  <div>
    <h1>Create Page</h1>
    <form @submit.prevent="createArticle">
      <label for="title">제목: </label>
      <input type="text" id="title" v-model="title">
      <br>
      <label for="content">내용: </label>
      <textarea v-model="content" id="content" cols="30" rows="10"></textarea>
      <br>
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { useRouter } from 'vue-router'
import axios from 'axios'

const title = ref('')
const content = ref('')
const store = useCounterStore()
const router = useRouter()

const createArticle = function () {
  axios({
    method: 'post',
    url: `${store.API_URL}/api/v1/articles/`,
    data: {
      title: title.value,
      content: content.value
    }
  })
    .then((res) => {
      router.push({ name: 'ArticleView' })
    })
    .catch(err => console.log(err))
}
</script>

<style>

</style>
