import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '🪜无障碍网上冲浪指南🪜',
      description: '教你如何科学上网',
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-MQYK3KRTDG',
    }),
  ],
})
