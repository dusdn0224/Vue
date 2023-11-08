<template>
  <div v-if="detail" class="dog-info">
    <p><strong>이름: </strong>{{ detail.name }}</p>
    <p><strong>품종: </strong>{{ detail.breed_group }}</p>
    <p><strong>높이:</strong> {{ detail.height.imperial }} 인치 ({{ detail.height.metric }} cm)</p>
    <p><strong>수명:</strong> {{ detail.life_span }}</p>
    <p><strong>성격:</strong> {{ detail.temperament }}</p>
    <p><strong>무게:</strong> {{ detail.weight.imperial }} 파운드 ({{ detail.weight.metric }} kg)</p>
  </div>
  <div v-else class="dog-info">
    <p><strong>상세 정보 누락</strong></p>
  </div>
</template>

<script setup>
const props = defineProps({
  detail: Object,
})
</script>

<style scoped>
.dog-info {
  margin-left: 3%;
}
</style>