import { PluginConfig } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export const plugins: PluginConfig = [
  searchPlugin({
    locales: {
      '/': {
        placeholder: 'Search',
      },
      '/zh/': {
        placeholder: '搜索',
      },
    },
    isSearchable: (page) => page.path !== '/',
  }),
  googleAnalyticsPlugin({
    id: 'G-MQYK3KRTDG',
  }),
]
