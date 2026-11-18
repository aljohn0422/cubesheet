import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// cubing 的打亂產生器（盲解練習頁）用會 code-split 的 web worker；
	// Vite 預設 worker 格式是 iife，不能 code-split，要改成 ES module。
	worker: {
		format: 'es'
	}
});
