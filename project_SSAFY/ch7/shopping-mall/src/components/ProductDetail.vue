<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <img :src="product.imagePath" alt="">
    <p>\ {{ product.price }}</p>
    <div @click="productstore.like(product.name)">
      <i v-if="!product.isFavorite" class="fa-regular fa-heart fa-xl"></i>
      <i v-else class="fa-solid fa-heart fa-xl"></i>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'

const productstore = useProductStore()
const props = defineProps({
  product: Object,
})

</script>

<style scoped>
.product-card {
  width: 300px;
  height: 500px;
  border: 1px solid lightgray;
  text-align: center;
}
img {
  width: 250px;
}
</style>