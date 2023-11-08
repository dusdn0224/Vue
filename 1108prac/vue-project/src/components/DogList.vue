<template>
  <div class="header">
    <h1>Random Dogs</h1>
    <button class="new-dog" @click="getRandomDogData">New Dogs</button>
  </div>
  <div v-for="dog in dogs" class="dog-box">
    <img :src="dog.url" alt="">
    <DogDetail :detail="dog.detail" />
  </div>
  <!-- <div v-if="dogIsEmpty">
  </div>
  <div v-else>
    아무것도 없네요
  </div> -->
</template>

<script setup>
import DogDetail from '@/components/DogDetail.vue'
import { computed, onMounted } from 'vue'
const emit = defineEmits(['getDogData'])

const getRandomDogData = function () {
  emit('getDogData')
}

onMounted(() => {
  getRandomDogData()
})

const props = defineProps({
  dogs: Array,
})

// const dogIsEmpty = computed(() => {
//   return props.dogs.length > 0 ? true : false
// })
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.dog-box {
  border: 1px solid black;
  display: flex;
  margin-top: 10%;
}

img {
  width: 300px;
  height: 300px;
  object-fit: fill;
}
/* CSS */
.new-dog {
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.new-dog:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}
.new-dog:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
</style>