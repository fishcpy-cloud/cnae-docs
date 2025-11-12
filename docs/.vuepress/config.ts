import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'CNAE Docs',
  description: '一个基于 VuePress 的CNAE Docs',
  base: '/',
  // 设置输出目录为相对路径的dist
  dest: 'dist',
  theme: plumeTheme({
    // 主题配置
    themeColor: '#46bd87',
    author: {
      name: '文档作者',
      link: '',
    },
    logo: '',
    repo: '',
    // 设置全局版权协议为CC-BY-NC-SA-4.0（署名—非商业性使用—相同方式共享 4.0）
    copyright: 'CC-BY-NC-SA-4.0',
    // 启用文章贡献者功能，设置为block模式显示完整信息
    contributors: {
      mode: 'block',
      avatar: true
    },
    footer: {
      copyright: '© 2025 fishcpy cloud All rights reserved',
    },
    navbar: [
      { text: '首页', link: '/' },
      { text: 'API 文档', link: '/api/' },
      { text: '使用指南', link: '/guide/' }
    ],
    // 侧边栏配置
    sidebar: {
      // API文档侧边栏配置
      '/api/': [
        { text: 'API 总览', link: '/api/' },
        { text: 'zyidc API', link: '/api/zyidc/overseas/' }
      ],
      // 其他目录的侧边栏可以在这里添加
      '/config/': [],
      '/guide/': []
    },
    plugins: {
      // 启用git插件以在开发环境也能显示贡献者信息
      git: true
    }
  }),
})