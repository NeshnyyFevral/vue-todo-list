<template>
  <li
    :class="$style['list-item']"
    @mouseleave="hover = false"
    @mouseenter="hover = true"
  >
    <button
      :class="[$style['toggle-btn'], {[$style['btn-complete']]: props.task.complete }]"
      @click="$emit('toggleDone')"
    />
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
      />
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
	background-image: url(../icons/accept.svg);
	background-repeat: no-repeat;
	position: absolute;
	top: 20px;
	left: 18px;
	background-color: #fff;
	cursor: pointer;
	border: none;
	padding: 12px;
	transition: background-color 0.2s linear, background-image 0.2s linear;
}
.toggle-btn:hover {
		background-color: rgb(225, 225, 225);
}

.remove-btn {
	background-image: url(../icons/cart.svg);
	background-color: #fff;
	border: none;
	position: absolute;
	top: 12px;
	right: 8px;
	left: auto;
	padding: 20px;
	border-radius: 50%;
	cursor: pointer;
	transition: background-color 0.2s linear;
}

.remove-btn:hover {
	background-color: rgb(232, 232, 232);
}

.item-text {
	margin-left: 40px;
	font-size: 20px;
}

.btn-complete {
	background-image: url(../icons/cancel.svg);
	opacity: 0.5;
}

.text-complete {
	text-decoration: line-through;
	opacity: 0.5;
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
