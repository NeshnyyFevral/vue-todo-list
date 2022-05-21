<template>
	<ul class="todo-list">
		<transition-group name="todo-list__container">
			<todo-list-item v-for="task in tasks" :key="task.id" :task="task" @removeTask="$emit('removeTask', task)"
				@toggleDone="$emit('toggleDone', task)">
			</todo-list-item>
		</transition-group>
	</ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
	components: {
		TodoListItem,
	},
	props: {
		tasks: {
			type: Array,
			default: () => [],
		}
	}
}
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

.todo-list__container-enter-active,
.todo-list__container-leave-active {
	transition: all 0.5s ease;
}

.todo-list__container-enter-from,
.todo-list__container-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
