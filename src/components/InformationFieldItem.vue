<template>
	<div class="information-item">
		<slot></slot>
		<span class="information-item__counter">{{ counter }}</span>
	</div>
</template>

<script>
export default {
	props: {
		counter: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style scoped>
.information-item {
	display: inline-flex;
	background-color: rgb(101, 101, 255);
	color: #fff;
	padding: 5px 15px;
	border-radius: 15px;
	align-items: center;
}

.information-item__counter {
	background-color: #fff;
	color: rgb(101, 101, 255);
	padding: 2px 8px;
	border-radius: 50%;
	margin-left: 5px;
}
</style>
