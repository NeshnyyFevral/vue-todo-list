import { defineConfig } from 'vite';
import vitePluginVue from '@vitejs/plugin-vue';
import vitePluginEslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [
		vitePluginVue(),
		vitePluginEslint(),
	],
	base: '/vue-todo-list/',
	build: {
		outDir: './docs',
	},
});
