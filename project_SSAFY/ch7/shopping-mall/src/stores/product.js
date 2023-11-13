import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  let id = 1
  const productList = ref([
    {
      id: id++,
      name: '상품 1',
      imagePath: 'src/assets/product1.jpg',
      price: 10000,
      isFavorite: false
    },
    {
      id: id++,
      name: '상품 2',
      imagePath: 'src/assets/product2.jpg',
      price: 20000,
      isFavorite: false
    },
    {
      id: id++,
      name: '상품 3',
      imagePath: 'src/assets/product3.jpg',
      price: 30000,
      isFavorite: false
    },
    {
      id: id++,
      name: '상품 4',
      imagePath: 'src/assets/product4.jpg',
      price: 40000,
      isFavorite: false
    },
    {
      id: id++,
      name: '상품 5',
      imagePath: 'src/assets/product5.jpg',
      price: 50000,
      isFavorite: false
    },
  ])

  const likeProducts = computed(() => {
    return productList.value.filter((product) => product.isFavorite)
  })

  const like = (name) => {
    productList.value.forEach((product) => {
      if (product.name === name) {
        product.isFavorite = !product.isFavorite
      }
    })
  }

  return { productList, like, likeProducts }
}, { persist: true })