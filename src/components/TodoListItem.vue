<template>
  <li
    :class="$style.listItem"
    @mouseleave="hover = false"
    @mouseenter="hover = true"
  >
    <button
      :class="[$style.toggleBtn, props.task.complete && $style.btnComplete]"
      @click="store.toggleDone(props.task)"
    />
    <span :class="[$style.itemText, props.task.complete && $style.textComplete]">
      {{ props.task.title }}
    </span>
    <transition :name="$style.container">
      <button
        v-show="hover"
        :class="$style.removeBtn"
        @click="store.removeTask(props.task)"
      />
    </transition>
  </li>
</template>

<script setup>
import { ref } from 'vue';
import { storeTasks } from '../stores/tasks';

const store = storeTasks();

const props = defineProps({
	task: {
		type: Object,
		default: () => ({}),
	},
});

const hover = ref(false);
</script>

<style module lang="scss">
.listItem {
	border: 2px solid rgb(225, 225, 225);
	border-radius: 30px;
	padding: 20px;
	margin-bottom: 10px;
	position: relative;
	overflow-x: hidden;
}

.toggleBtn {
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
.toggleBtn:hover {
	background-color: rgb(225, 225, 225);
}

.removeBtn {
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

.removeBtn:hover {
	background-color: rgb(232, 232, 232);
}

.itemText {
	margin-left: 40px;
	font-size: 20px;
}

.btnComplete {
	background-image: url(../icons/cancel.svg);
	opacity: 0.5;
}

.textComplete {
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
