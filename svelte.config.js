import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// These lines allow us to run HMR on Gitpod and also make sure people can run project locally
		// and take benefit of HMR.
		vite: {
			server: {
				// hot modular reloading
				hmr: {
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost" 
					// Now, we can run the dev env. both locally and on Gitpod and host is always set correctly.
					// We get the benefit of HMR both on Gitpod and local environment
					// HMR_HOST exits only when Gitpod (see '.gitpod.yml')
					// HMR_HOST is including https as protocol, vit doesn't like that. It just hosts and use websockets.
				}
			}
		}
	}
};

export default config;
