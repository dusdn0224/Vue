<template>
  <div>
    <form action="submit">
      <label for=""><b>이름</b></label>
      <input type="text" v-model="name">
      <label for=""><b>직함</b></label>
      <input type="text" v-model="title">
      <button @click="createCard">명함 추가</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const title = ref('')

const emit = defineEmits(['createCard'])

const createCard = (event) => {
  event.preventDefault()
  emit('createCard', { name: name.value, title: title.value})
  name.value = ''
  title.value = ''
}
</script>

<style scoped>
input {
  margin: 1%;
  width: 250px;
  height: 30px;
  border: 1px solid dodgerblue;
}

button {
  height: 35px;
  background-color: white;
  color: dodgerblue;
  border: 1px solid dodgerblue;
}
</style>