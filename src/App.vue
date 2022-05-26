<template>
  <div class="app">
    <div class="app__container">
      <h1 class="app__title">Vue ToDo List</h1>
      <div class="app__body">
        <information-field :visibleRemoveDoneBtn="completeTasks > 0"
          @removeDone="removeDone" @removeAll="removeAll"
          :information="{ total: this.tasks.length, done: completeTasks }
          ">
        </information-field>
        <todo-list @removeTask="removeTask" @toggleDone="toggleDone" :tasks="tasks"></todo-list>
        <todo-input @createTask="createTask"></todo-input>
      </div>
    </div>
  </div>
</template>

<script>
import InformationField from './components/InformationField.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

export default {
	components: {
		InformationField, TodoList, TodoInput,
	},
	data() {
		return {
			tasks: [],
		};
	},
	methods: {
		createTask(task) {
			this.tasks.push(task);
		},
		removeAll() {
			this.tasks = [];
		},
		toggleDone(task) {
			this.tasks = [...this.tasks].map((el) => {
				if (el.id === task.id) {
					el.complete = !el.complete;
				}
				return el;
			});
		},
		removeDone() {
			this.tasks = [...this.tasks].filter((task) => !task.complete);
		},
		removeTask(task) {
			this.tasks = [...this.tasks].filter((el) => el.id !== task.id);
		},
	},
	computed: {
		completeTasks() {
			let count = 0;
			this.tasks.forEach((task) => {
				if (task.complete) count += 1;
			});
			return count;
		},
	},
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  background: linear-gradient(rgb(134, 255, 134), rgb(0, 0, 0));
  height: 100vh;
  font-family: sans-serif;
}

.app__container {
  display: block;
  margin: 0 auto;
  padding-top: 150px;
  max-width: 700px;
  text-align: center;
  margin-bottom: 30px;
}

.app__body {
  background-color: #fff;
  border-radius: 100%;
}

.app__title {
  font-size: 75px;
  color: #fff;
}
</style>
