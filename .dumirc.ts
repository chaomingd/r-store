import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';

const publicPath = isDev ? '/' : '/r-store/';

export default defineConfig({
  outputPath: 'docs-dist',
  base: publicPath,
  publicPath: publicPath,
  resolve: {
    atomDirs: [{ type: 'guide', dir: 'src' }]
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  favicons: [publicPath + 'logo-fill-64x64.png'],
  themeConfig: {
    logo: publicPath + 'logo-fill_100.png',
    name: 'r-model-store',
    nav: {
      'zh-CN': [{ title: '指南', link: '/guides' }],
      'en-US': [{ title: 'Guide', link: '/en-US/guides' }],
    },
  },
});
