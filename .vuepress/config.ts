import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './sidebar'
import { navbar } from './navbar'
import { plugins } from './plugins'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '无障碍网上冲浪指南',
  description: '教你如何科学上网',
  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
    contributors: false,
  }),
  plugins: plugins,
})
