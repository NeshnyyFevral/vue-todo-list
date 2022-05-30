import { defineStore } from 'pinia';

export const storeTasks = defineStore({
	id: 'tasks',
	state: () => ({
		tasks: [],
	}),
	actions: {
		createTask(task) {
			this.tasks.push(task);
		},
		removeAll() {
			this.tasks = [];
		},
		removeDone() {
			this.tasks = [...this.tasks].filter((task) => !task.complete);
		},
		removeTask(task) {
			const index = this.tasks.findIndex((el) => el.id === task.id);
			this.tasks.splice(index, 1);
		},
		toggleDone(task) {
			// task.complete = !task.complete;
			this.tasks = [...this.tasks].map((el) => {
				if (el.id === task.id) {
					el.complete = !el.complete;
				}
				return el;
			});
		},
	},
	getters: {
		completeTasks: (state) => state.tasks.reduce((acc, cur) => (cur.complete ? acc + 1 : acc), 0),
	},
});
