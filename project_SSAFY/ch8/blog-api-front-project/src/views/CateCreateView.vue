<template>
  <div>
    <label for="catename">Category 종류:</label>
    <br>
    <input type="text" id="catename" v-model="name">
    <br>
    <button @click="createCate">카테고리 생성</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useCounterStore } from '@/stores/counter.js'
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const store = useCounterStore()
const router = useRouter()
const name = ref('')

const createCate = function () {
  axios({
    method: 'post',
    url: `${store.API_URL}/posts/catelist/`,
    data: {
      name: name.value
    }
  })
    .then((res) => {
      router.push({ name: 'main' })
    })
    .catch(err => console.log(err))
}
</script>

<style scoped>

</style>