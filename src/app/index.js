import { createApp as _createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '../App.vue';

export default function createApp() {
	const pinia = createPinia();
	const storageTasks = JSON.parse(localStorage.getItem('localeTasks'));

	pinia.state.value = {
		tasks: {
			tasks: storageTasks || [],
		},
	};

	const app = _createApp(App)
		.use(pinia);

	return {
		pinia, app,
	};
}
