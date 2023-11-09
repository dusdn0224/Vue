<template>
  <div id="main">
    <div id="container">
      <div id="title">
        <h1>Quiz 퀴즈</h1>
      </div>
      <div id="description">
        <p>여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요.
          지금 바로 도전해보세요!
        </p>
      </div>
      <nav id="navbar">
        <ul id="navbar-menu">
          <RouterLink :to="{ name: 'home' }" class="navbar-item">Home</RouterLink>
          <RouterLink :to="{ name: 'quiz' }" class="navbar-item">Quiz</RouterLink>
        </ul>
      </nav>
    </div>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#main {
  display: flex;
  justify-content: center;
}
#container {
  width: 600px;
  height: 350px;
  background-color: whitesmoke;
  padding: auto auto;
}
#title {
  color: white;
  background-color: orange;
  width: 550px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 25px;
  border: 1px solid lightgray;
  border-radius: 10px 10px 0 0 / 10px 10px 0 0;
}
#description {
  background-color: white;
  width: 550px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 25px;
  border: 1px solid lightgray;
  border-radius: 0 0 10px 10px / 0 0 10px 10px;
}
#navbar {
  color: white;
  background-color: rgb(43, 43, 43);
  width: 550px;
  height: 40px;
  margin-top: 5%;
  margin-left: 25px;
  border-left: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
#navbar-menu {
  display: flex;
  list-style: none;
}
.navbar-item {
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  border-right: 1px solid white;
}
</style>