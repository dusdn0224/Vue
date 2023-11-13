<template>
  <div>
    <h1>Todo Project</h1>
    <p>Done Todos: {{ store.doneTodosCount }}</p>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import { useCounterStore } from '@/stores/counter'


const store = useCounterStore()

</script>

<style scoped>

</style>