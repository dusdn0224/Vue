<template>
	<div style="text-align: center; border: 1px solid black;" class="card">
		<h1>가수 이름</h1>
		<img src="@/assets/singer.jpg" alt="singer_img" 
		style="width: 200px; border-radius: 50%;">
		<p>가수 소개글</p>
		<SingerAlbum />
		<SingerAlbum />
	</div>
</template>

<script setup>
import SingerAlbum from './SingerAlbum.vue';
</script>

<style scoped>
/* h1 {
	color: green;
} */
</style>
