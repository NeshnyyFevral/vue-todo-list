import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI/index.js'
const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component);
});

app.mount('#app')
