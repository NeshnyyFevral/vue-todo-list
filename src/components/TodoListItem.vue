<template>
  <li
    :class="$style['list-item']"
    @mouseleave="hover = false"
    @mouseenter="hover = true"
  >
    <button
      :class="[$style['toggle-btn'], {[$style['btn-complete']]: props.task.complete }]"
      @click="$emit('toggleDone')"
    >
      ✓
    </button>
    <span
      :class="[$style['item-text'], {[$style['text-complete']]: props.task.complete }]"
    >
      {{ props.task.title }}
    </span>
    <transition
      :name="$style.container"
    >
      <button
        v-show="hover"
        :class="$style['remove-btn']"
        @click="$emit('removeTask')"
      >
        x
      </button>
    </transition>
  </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	task: {
		type: Object,
		default: () => ({}),
	},
});

const hover = ref(false);
</script>

<style module lang="scss">
.list-item {
	border: 2px solid rgb(225, 225, 225);
	border-radius: 30px;
	padding: 20px;
	margin-bottom: 10px;
	position: relative;
	overflow-x: hidden;
}

.toggle-btn {
	position: absolute;
	top: 12px;
	left: 10px;
	background-color: rgb(12, 179, 12);
	border-radius: 50%;
	transition: background-color 0.2s linear;
	cursor: pointer;
	border: none;
	padding: 0 8.5px;
	font-size: 30px;
	color: #fff;
}
.toggle-btn:hover {
		background-color: rgb(6, 124, 6);
}

.remove-btn {
	border: none;
	position: absolute;
	top: 12px;
	right: 8px;
	left: auto;
	background-color: red;
	font-size: 30px;
	line-height: 32px;
	padding: 3px 13px 6px;
	border-radius: 50%;
	cursor: pointer;
	color: #fff;
}

.remove-btn:hover {
	background-color: rgb(185, 0, 0);
}

.item-text {
	margin-left: 40px;
	font-size: 20px;
}

.btn-complete {
	background-color: rgb(144, 144, 144);
	opacity: 0.6;
}

.text-complete {
	text-decoration: line-through;
	opacity: 0.6;
}
.container{
	&:global(-enter-active),
  &:global(-leave-active) {
		transition: all 0.2s ease;
	}
  &:global(-enter-from),
  &:global(-leave-to) {
		opacity: 0;
	transform: translateX(20px);
	}
}
</style>
