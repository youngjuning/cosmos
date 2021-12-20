import { defineConfig } from 'dumi';

export default defineConfig({
  title: '洛竹宇宙',
  favicon: 'https://raw.githubusercontent.com/youngjuning/images/main/202111141721732.png',
  logo: 'https://raw.githubusercontent.com/youngjuning/images/main/202111141721732.png',
  mode: 'site',
  hash: true,
  exportStatic: {},
  base: '/cosmos',
  publicPath: '/cosmos/',
  sitemap: {
    hostname: 'https://youngjuning.js.org',
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/youngjuning/cosmos',
    },
    {
      title: '博客',
      path: 'https://youngjuning.js.org/',
    },
  ],
  // more config: https://d.umijs.org/config
});
