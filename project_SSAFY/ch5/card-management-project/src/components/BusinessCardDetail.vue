<template>
  <div class="cards">
    <p class="name">이름: {{ card.name }}</p>
    <p>직함: {{ card.title }}</p>
    <button @click="deleteCard">명함 삭제</button>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Object,
})

const emit = defineEmits(['deleteCard'])
const deleteCard = () => {
  emit('deleteCard', props.card)
}
</script>

<style scoped>
.cards {
  border: 1px solid lightgray;
  background-color: whitesmoke;
  display: inline-block;
  width: 40%;
  margin: 2%;
  padding: 1%;
}

.name {
  font-size: 20px;
  font-weight: bold;
}
</style>