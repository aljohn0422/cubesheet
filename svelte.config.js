import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Output directory (defaults to 'build')
			out: 'build',
			// Optional: Ensure static assets are pre-rendered
			precompress: false,
			// Ensure all routes are pre-rendered as static files
			fallback: null
		}),
		paths: {
			base: process.env.BASE_PATH || '' // Use BASE_PATH from environment
		},
		alias: {
			"@/*": "./path/to/lib/*",
		},
	}
};

export default config;
