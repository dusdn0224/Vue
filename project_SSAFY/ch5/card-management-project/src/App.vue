<template>
  <header>명함 관리 페이지</header>
  <main>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</main>
  <article>
    <BusinessCard />
  </article>
  <footer>ⓒ 2023 My Business Cards</footer>
</template>

<script setup>
import BusinessCard from '@/components/BusinessCard.vue';
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
  text-align: center;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color:whitesmoke;
}
</style>