<template>
  <div>
    <h1>장바구니 페이지</h1>
    <div class="products">
      <ProductDetail 
        v-for="product in productstore.likeProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductDetail from '@/components/ProductDetail.vue';
import { useProductStore } from '@/stores/product'

const productstore = useProductStore()
</script>

<style scoped>

</style>