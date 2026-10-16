import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rexbunnyservices-star.github.io',
  base: '/okan-innovations',
  trailingSlash: 'always',
  vite: {
    resolve: {
      alias: {
        '@lib': '/src/lib',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
      },
    },
  },
});
