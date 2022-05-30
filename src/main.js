import createApp from './app';

const { app, pinia } = createApp();

app
	.use(pinia)
	.mount('#app');
