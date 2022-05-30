<template>
  <transition-group
    tag="ul"
    :name="$style.list"
    :class="$style.list"
  >
    <todo-list-item
      v-for="task in store.tasks"
      :key="task.id"
      :task="task"
    />
  </transition-group>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';
import { storeTasks } from '../stores/tasks';

const store = storeTasks();

/* const props = defineProps({
	tasks: {
		type: Array,
		default: () => ([]),
	},
}); */
</script>

<style module lang="scss">
.list {
	text-align: start;
	height: 400px;
	background-color: rgb(255, 255, 255);
	overflow-y: auto;
	list-style: none;
	padding: 40px;

	&:global(-move),
	&:global(-enter-active),
	&:global(-leave-active){
		transition: all 0.5s ease;
	}

	&:global(-move){
		transition: all 0.8s ease;
	}

	&:global(-enter-from),
	&:global(-leave-to){
		opacity: 0;
		transform: translateX(30px);
	}

	&:global(-leave-active){
		position: absolute;
	}
}

@media screen and (max-width: 650px){
	.list{
		padding: 10px;
	}
}

@media screen and (max-width: 500px){
	.list{
		height: 300px;
	}
}
</style>
