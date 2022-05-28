<template>
  <div :class="$style.item">
    <slot />
    <span :class="$style.counter">{{ props.counter }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
	counter: {
		type: Number,
		default: 0,
	},
});
</script>

<style module lang="scss">
.item {
	display: inline-flex;
	background-color: rgb(101, 101, 255);
	color: #fff;
	padding: 5px 15px;
	border-radius: 15px;
	align-items: center;
}

.counter {
	background-color: #fff;
	color: rgb(101, 101, 255);
	padding: 2px 8px;
	border-radius: 50%;
	margin-left: 5px;
}
</style>
