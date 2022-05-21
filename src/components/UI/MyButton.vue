<template>
	<button class="my-button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button',
}
</script>

<style scoped>
.my-button {
	border: none;
	background-color: rgb(121, 121, 255);
	padding: 0 8.5px;
	font-size: 30px;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.1s linear;
}

.my-button:hover {
	background-color: rgb(41, 41, 171);
}
</style>
