<template>
  <div id="wrap">
    <header>명함 관리 페이지</header>
    <main>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</main>
    <CreateCardForm @createCard="updateCard" />
    <article>
      <BusinessCard :newCard="newCard"/>
    </article>
  </div>
  <footer>ⓒ 2023 My Business Cards</footer>
</template>

<script setup>
import CreateCardForm from '@/components/CreateCardForm.vue'
import BusinessCard from '@/components/BusinessCard.vue';
import { ref } from 'vue'

const newCard = ref({})
const updateCard = (card) => {
  newCard.value = card
}
</script>

<style scoped>
header {
  color: white;
  background-color:dodgerblue;
  width: 300px;
  height: 130px;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

main {
  margin-top: 30px;
  margin-bottom: 3%;
}

#wrap {
  height: auto;
  min-height: 100%;
  padding-bottom: 50px;
  text-align: center;
}

footer {
  position: relative;
  bottom: 0;
  transform: translateY(-100%);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color:whitesmoke;
}
</style>