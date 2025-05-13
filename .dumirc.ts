import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [{ type: 'guide', dir: 'src' }]
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  favicons: ['/logo-fill-64x64.png'],
  themeConfig: {
    logo: '/logo-fill_100.png',
    name: 'r-store',
    nav: {
      'zh-CN': [{ title: '指南', link: '/guides' }],
      'en-US': [{ title: 'Guide', link: '/en-US/guides' }],
    },
  },
});
