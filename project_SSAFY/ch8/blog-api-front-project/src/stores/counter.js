import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('blog', () => {
  const posts = ref([])
  const cates = ref([])
  const API_URL = 'http://127.0.0.1:8000'

  const getPosts = function() {
    axios({
      method:'get',
      url: `${API_URL}/posts/postlist/`
    })
      .then((res) => {
        posts.value = res.data
      })
      .catch(err => console.log(err))
  }

  const getCates = function() {
    axios({
      method:'get',
      url: `${API_URL}/posts/catelist/`
    })
      .then((res) => {
        cates.value = res.data
      })
      .catch(err => console.log(err))
  }

  const cateName = function (cateId) {
    return cates.value.filter((cate) => cate.id === cateId)[0].name
  }

  return { posts, cates, API_URL, getPosts, getCates, cateName }
}, { persist: true })
