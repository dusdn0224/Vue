<template>
  <div class="container">
    <h3>2023-11-08 실습</h3>
    <hr>
    <DogList :dogs="dogs" @getDogData="getDogData" />
  </div>
</template>

<script setup>
import DogList from '@/components/DogList.vue';
import axios from 'axios'
import { ref } from 'vue'

const dogs = ref([])

// 비동기 버그 해결 코드
// async: 이 함수가 비동기 함수다 알려주는 키워드
// await: 비동기 함수의 종료를 기다려주는 키워드
// try-catch와 함께 자주 사용된다.
const getDogData = async () => {
  const URL = 'https://api.thedogapi.com/v1/images/search?limit=10'
  try {
    const response = await axios.get(URL)
    const dogData = response.data

    // 비동기 쓸 때 forEach 쓰지 말자
    // dogData.forEach(async (dog) => {
    //   const detailURL = `https://api.thedogapi.com/v1/images/${dog.id}/`
    //   const detailres = await axios.get(detailURL)
    //   dog.detail = detailres.data.breeds ? detailres.data.breeds[0] : null
    // });
    
    // map 안에 async 쓰면 자동으로 Promise 객체 반환됨
    const dogDataWithDetail = dogData.map(async (dog) => {
      const detailURL = `https://api.thedogapi.com/v1/images/${dog.id}/`
      const detailres = await axios.get(detailURL)
      dog.detail = detailres.data.breeds ? detailres.data.breeds[0] : null
    });
    // Promise.all: Promise 배열의 계산이 모두 끝날 때까지 기다려 줌
    await Promise.all(dogDataWithDetail)

    dogs.value = dogData
  } catch (error) {
    console.error('강아지 데이터 조회 실패', error)
  }
}


// 비동기 버그 있는 코드
// const getDogData = function () {
//   const URL = 'https://api.thedogapi.com/v1/images/search?limit=10'
//   axios.get(URL)
//     .then((response) => {
//       // dogs.value = []
//       const dogData = response.data
      
//       dogData.forEach((dog) => {
//         const detailURL = `https://api.thedogapi.com/v1/images/${dog.id}/`
//         axios.get(detailURL)
//           .then((response) => {
//             // dogs.value.push(response.data)
//             dog.detail = response.data.breeds
//           }).catch((error) => {
//             console.log(error)
//           })
//       })

//       return dogData
//     }).then((response) => {
//       dogs.value = response
//     }).catch((error) => {
//       console.log(error)
//     })
// }
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>