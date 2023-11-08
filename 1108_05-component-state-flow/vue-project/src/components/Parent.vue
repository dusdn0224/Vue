<template>
  <div>
    <ParentChild 
    my-msg="tatatata" 
    :dynamic-props="name" 
    @some-event="someCallback"
    @emit-args="getNumbers"
    @update-name="updateName"
    />
  </div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue';
import { ref } from 'vue'

const name = ref('Alice')

const someCallback = function () {
  console.log('ParentChild가 발신한 이벤트 수신')
}

const getNumbers = function (...args) {
  console.log(args)
}

const updateName = function () {
  name.value += ' Bella'
}
</script>

<style scoped>

</style>