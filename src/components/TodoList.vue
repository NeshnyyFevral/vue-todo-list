<template>
  <transition-group
    tag="ul"
    :name="$style.list"
    :class="$style.list"
  >
    <todo-list-item
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
      @removeTask="$emit('removeTask', task)"
      @toggleDone="$emit('toggleDone', task)"
    />
  </transition-group>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
	tasks: {
		type: Array,
		default: () => ([]),
	},
});
</script>

<style module lang="scss">
.list {
	text-align: start;
	height: 300px;
	background-color: #fff;
	overflow-y: auto;
	list-style: none;
	padding: 40px;

	&:global(-enter-active),
	&:global(-leave-active){
		transition: all 0.5s ease;
	}

	&:global(-enter-from),
	&:global(-leave-to){
		opacity: 0;
		transform: translateX(30px);
	}
}
</style>
