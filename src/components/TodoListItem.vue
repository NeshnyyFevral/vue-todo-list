<template>
	<li @mouseleave="this.hover = false" @mouseenter="this.hover = true" class="list-item">
		<my-button @click="$emit('toggleDone')" class="list-item__toggle-btn"
			:class="{ 'list-item__toggle-btn--complete': this.task.complete }">✓</my-button>
		<span class="list-item__text" :class="{ 'list-item__text--complete': this.task.complete }">
			{{ task.title }}</span>
		<transition-group name="list-item__container">
			<my-button @click="$emit('removeTask')" v-show="this.hover" class="list-item__remove-btn" :key="Date.now()">x
			</my-button>
		</transition-group>
	</li>
</template>

<script>
export default {
	props: {
		task: {
			type: Object,
			default: () => ({}),
		}
	},
	data() {
		return {
			hover: false,
		}
	}
}
</script>

<style scoped>
.list-item {
	border: 2px solid rgb(225, 225, 225);
	border-radius: 30px;
	padding: 20px;
	margin-bottom: 10px;
	position: relative;
	overflow-x: hidden;
}

.list-item .list-item__toggle-btn {
	position: absolute;
	top: 12px;
	left: 10px;
	background-color: rgb(12, 179, 12);
	border-radius: 50%;
	transition: background-color 0.2s linear;
}

.list-item .list-item__toggle-btn--complete {
	background-color: rgb(144, 144, 144);
	opacity: 0.6;
}

.list-item .list-item__toggle-btn:hover {
	background-color: rgb(6, 124, 6);
}

.list-item .list-item__remove-btn {
	position: absolute;
	top: 13px;
	right: 8px;
	left: auto;
	background-color: red;
	line-height: 32px;
	padding: 0px 10.5px 3px;
	border-radius: 50%;
}

.list-item .list-item__remove-btn:hover {
	background-color: rgb(185, 0, 0);
}

.list-item .list-item__text {
	margin-left: 40px;
	font-size: 20px;
}

.list-item .list-item__text--complete {
	text-decoration: line-through;
	opacity: 0.6;
}

.list-item .list-item__container-enter-active,
.list-item .list-item__container-leave-active {
	transition: all 0.2s ease;
}

.list-item .list-item__container-enter-from,
.list-item .list-item__container-leave-to {
	opacity: 0;
	transform: translateX(20px);
}
</style>
