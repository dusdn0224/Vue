<template>
  <div class="ssafy">
    <h1>SAMSUNG</h1>
    <h1>SW</h1>
    <h1>ACADEMY</h1>
    <h1>FOR</h1>
    <h1>YOUTH</h1>
    <p>SSAFY</p>
    <h2>카테고리 목록</h2>
    {{ store.cates }}
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter.js';

const store = useCounterStore()
onMounted(() => {
  store.getCates()
})

</script>

<style scoped>
.ssafy {
  text-align: center;
}
</style>