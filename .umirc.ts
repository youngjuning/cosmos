import { defineConfig } from 'dumi';

export default defineConfig({
  title: '洛竹的日常',
  favicon: 'https://cdn.jsdelivr.net/gh/youngjuning/images/202111141721732.png',
  logo: 'https://cdn.jsdelivr.net/gh/youngjuning/images/202111141721732.png',
  mode: 'site',
  hash: true,
  exportStatic: {},
  base: '/daily',
  publicPath: '/daily/',
  sitemap: {
    hostname: 'https://youngjuning.js.org',
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/youngjuning/daily',
    },
  ],
  // more config: https://d.umijs.org/config
});
