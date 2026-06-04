import myExtIntegration from './myExtIntegration';

// refs. https://astro.build/config
export const astroConfig = {
  base: '/',
  site: 'https://tomocakezombie.github.io',
  trailingSlash: 'always',
  compressHTML: false,
  integrations: [myExtIntegration()],
  build: {
    format: 'directory',
  },
  vite: {
    logLevel: 'error',
  },
};
