<template>
  <div>
    <h1>게시글 생성 페이지</h1>
    <div>
      <label for="catepick">카테고리 선택:</label><br>
      <select name="categories" id="catepick" v-model="category">
        <option disabled value="">옵션을 선택해주세요.</option>
        <option v-for="cate in store.cates" :value="cate.id">{{ cate.name }}</option>
      </select>
      <br>
      <label for="title">제목:</label><br>
      <input type="text" id="title" v-model="title">
      <br>
      <label for="content">내용:</label><br>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea>
      <br>
      <input type="submit" value="게시글 생성" @click="createPost">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter.js';
import { useRouter } from 'vue-router';
import axios from 'axios'

const store = useCounterStore()
const router = useRouter()
const category = ref('')
const title = ref('')
const content = ref('')

onMounted(() => {
  store.getCates()
})


const createPost = function () {
  axios({
    method: 'post',
    url: `${store.API_URL}/posts/postlist/`,
    data: {
      category: category.value,
      title: title.value,
      content: content.value
    }
  })
    .then((res) => {
      router.push({ name: 'postlist' })
    })
    .catch(err => console.log(err))
  }

</script>

<style scoped>

</style>