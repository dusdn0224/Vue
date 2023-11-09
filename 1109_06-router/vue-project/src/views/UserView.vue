<template>
  <div>
    <h1>UserView</h1>
    <h2>{{ $route.params.id }}번 페이지</h2>
    <h2>{{ userId }}번 페이지</h2>
    <button @click="goHome">홈으로!</button>
    <button @click="goAnotherUser">100번 유저 페이지로</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const userId = ref(route.params.id)

const router = useRouter()
const goHome = () => {
  // router.push({ name: 'home' })
  router.replace({ name: 'home' })
}

// onBeforeRouteLeave((to, from) => {
//   const answer = window.confirm('Seriously?')
//   if (answer === false) {
//     return false
//   }
// })

const goAnotherUser = () => {
  router.push({ name: 'user', params: {id: 100} })
}

onBeforeRouteUpdate((to, from) => {
  userId.value = to.params.id
})
</script>

<style scoped>

</style>