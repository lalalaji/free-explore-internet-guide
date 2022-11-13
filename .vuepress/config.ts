import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "无障碍网上冲浪指南",
      description: "教你如何科学上网",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-MQYK3KRTDG',
    }),
  ],
});
