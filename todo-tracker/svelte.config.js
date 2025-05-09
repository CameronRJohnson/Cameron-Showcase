import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    paths: {
      base: 'Cameron-Showcase/todo-tracker', // important for GitHub Pages
    }
  }
};

export default config;