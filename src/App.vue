<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <h1 :class="$style.title">
        Vue ToDo List
      </h1>
      <div :class="$style.body">
        <information-field />
        <todo-list />
        <todo-input />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import InformationField from './components/InformationField.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import { storeTasks } from './stores/tasks';

const store = storeTasks();
watch(store.tasks, store.watchTasks);

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
  background: linear-gradient(3deg, #e6d16c, #16014c);
  background-repeat: no-repeat;
  height: 100vh;
  font-family: sans-serif;
}

.container {
  display: block;
  margin: 0 auto;
  padding-top: 50px;
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
    padding: 50px 40px;
  }
}

@media screen and (max-width: 650px){
  .container{
    padding: 20px 40px;
  }
  .title{
    font-size: 50px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 500px){
	.container{
		padding: 20px 20px;
	}
	.title{
		font-size: 45px;
	}
}

@media screen and (max-width: 400px){
	.container{
		padding: 25px 20px;
	}
}
</style>
