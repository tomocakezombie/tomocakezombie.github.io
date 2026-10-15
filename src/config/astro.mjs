import sitemap from '@astrojs/sitemap';
import myExtIntegration from './myExtIntegration';

// refs. https://astro.build/config
export const astroConfig = {
  base: '/',
  site: 'https://tomocakezombie.github.io',
  trailingSlash: 'always',
  compressHTML: false,
  integrations: [
    myExtIntegration(),
    sitemap({
      // subpage はナビやメニューから辿れない未使用のサンプルページのため除外する
      filter: (page) => !page.includes('/subpage/'),
    }),
  ],
  build: {
    format: 'directory',
  },
  vite: {
    logLevel: 'error',
  },
};
