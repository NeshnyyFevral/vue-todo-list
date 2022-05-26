<template>
	<transition-group name="todo-list" tag="ul" class="todo-list">
		<todo-list-item
			v-for="task in tasks"
			:key="task.id" :task="task" @removeTask="$emit('removeTask', task)"
			@toggleDone="$emit('toggleDone', task)">
		</todo-list-item>
	</transition-group>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
	components: {
		TodoListItem,
	},
	props: {
		tasks: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style scoped>
.todo-list {
	text-align: start;
	height: 300px;
	background-color: #fff;
	overflow-y: auto;
	list-style: none;
	padding: 40px;
}

.todo-list-enter-active,
.todo-list-leave-active {
	transition: all 0.5s ease;
}

.todo-list-enter-from,
.todo-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
