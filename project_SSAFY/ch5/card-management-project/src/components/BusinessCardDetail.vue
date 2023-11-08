<template>
  <div style="text-align: center; margin-top: 10%;">
    <h3>보유 명함 목록</h3>
    <div v-for="card in cards" class="cards">
      <p class="name">이름: {{ card.name }}</p>
      <p>직함: {{ card.title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cards: Object,
})
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