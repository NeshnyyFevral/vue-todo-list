<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <h1 :class="$style.title">
        Vue ToDo List
      </h1>
      <div :class="$style.body">
        <information-field
          :information="{ total: tasks.length, done: completeTasks }"
          :visible-remove-done-btn="completeTasks > 0"
          @removeDone="removeDone"
          @removeAll="removeAll"
        />
        <todo-list
          :tasks="tasks"
          @removeTask="removeTask"
          @toggleDone="toggleDone"
        />
        <todo-input @createTask="createTask" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import InformationField from './components/InformationField.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

const tasks = ref([]);

const createTask = (task) => {
	tasks.value.push(task);
};

const removeAll = () => {
	tasks.value = [];
};

const toggleDone = (task) => {
	task.complete = !task.complete;
};

const removeDone = () => {
	tasks.value = [...tasks.value].filter((task) => !task.complete);
};

const removeTask = (task) => {
	const index = tasks.value.findIndex((el) => el.id === task.id);
	tasks.value.splice(index, 1);
};

const completeTasks = computed(
	() => tasks.value.reduce(
		(acc, cur) => (cur.complete ? acc + 1 : acc),
		0,
	),
);
</script>

<style module lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.root {
  /* background: linear-gradient(rgb(0, 211, 253), rgb(187, 32, 138)); */
	background: linear-gradient(3deg, #e6d16c, #16014c);
	background-repeat: no-repeat;
  height: 100vh;
  font-family: sans-serif;
}

.container {
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  max-width: 700px;
  text-align: center;
  margin-bottom: 30px;
}

.body {
  background-color: #fff;
  border-radius: 100%;
}

.title {
  font-size: 75px;
  color: #fff;
}

@media screen and (max-width: 700px){
	.container{
		padding: 90px 40px;
	}
}

@media screen and (max-width: 650px){
	.container{
		padding: 40px 40px;
	}
	.title{
		font-size: 60px;
    margin-bottom: 20px;
	}
}

@media screen and (max-width: 500px){
	.container{
		padding: 40px 20px;
	}
	.title{
		font-size: 45px;
	}
}

@media screen and (max-width: 300px){
	.container{
		padding: 25px 20px;
	}
}
</style>
