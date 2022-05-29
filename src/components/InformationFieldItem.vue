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
$color: rgb(135, 135, 135);
.item {
	display: inline-flex;
	background-color: $color;
	color: #fff;
	padding: 4px 13px;
	border-radius: 15px;
	align-items: center;
	border: 2px solid #333;
}

.counter {
	background-color: #fff;
	color: $color;
	padding: 1px 7px 0.5px;
	border-radius: 50%;
	margin-left: 5px;
}
</style>
