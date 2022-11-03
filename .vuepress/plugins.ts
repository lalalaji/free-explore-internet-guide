import { PluginConfig } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

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
]
