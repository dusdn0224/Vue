<template>
	<div style="text-align: center;">
		<h1>가수 목록</h1>
		<span v-for="singer in singers">
			<SingerDetail />
		</span>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import SingerDetail from './singers/SingerDetail.vue';

const singers = ref([
	{name: 'adele'},
	{name: 'marron 5'},
	{name: 'Dua Lipa'},
])
</script>

<style scoped>
.card {
	display: inline-block;
	width: 40%;
	margin: 20px;
}
h1 {
	color: orangered;
}
</style>