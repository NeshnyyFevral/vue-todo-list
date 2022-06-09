<template>
  <div :class="$style.input">
    <input
      placeholder="New task"
      type="text"
      :value="text"
      @keyup.enter="create"
      @input="text = $event.target.value"
    >
    <button
      :class="$style.button"
      @click="create"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeTasks } from '../stores/tasks';

const store = storeTasks();

const text = ref('');

const create = () => {
	if (!text.value) return;
	const task = {};
	task.id = Date.now();
	task.title = text.value;
	task.complete = false;
	store.createTask(task);
	text.value = '';
};
</script>

<style module lang="scss">
.input {
  height: 90px;
  background-color: rgb(242, 242, 242);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.input input {
  width: 80%;
  border-radius: 30px;
  border: 3px solid rgb(0, 0, 106);
  padding: 15px 30px;
  color: rgb(0, 0, 101);
  font-size: 20px;
  font-weight: 500;
}

.button {
  position: absolute;
  border: none;
  background-color: rgb(130, 130, 130);
  right: 80px;
  padding: 0 8.5px;
  border-radius: 50%;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.1s linear;
}

.button:hover {
  background-color: rgb(63, 63, 63);
}

@media screen and (max-width: 650px){
  .button{
    right: 40px;
  }
  .input input{
    width: 90%;
  }
}
@media screen and (max-width: 500px){
  .button{
    right: 35px;
  }
}
</style>
