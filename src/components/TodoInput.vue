<template>
	<div class="todo-input">
		<my-input @keyup.enter="create" :value="text" @input="text = $event.target.value"></my-input>
		<my-button @click="create" class="todo-input__button">+</my-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
		}
	},
	methods: {
		create() {
			if (!this.text) return;
			const task = {};
			task.id = Date.now();
			task.title = this.text;
			task.complete = false;
			this.$emit('createTask', task);
			this.text = '';
		}
	}
}
</script>

<style scoped>
.todo-input {
	height: 75px;
	background-color: rgb(242, 242, 242);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.todo-input input {
	width: 80%;
	border-radius: 30px;
	border: 3px solid rgb(0, 0, 106);
	padding: 15px 30px;
	color: rgb(0, 0, 101);
	font-size: 20px;
	font-weight: 500;
}

.todo-input__button {
	position: absolute;
	right: 80px;
	border-radius: 50%;
}
</style>
