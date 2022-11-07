import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '代理',
    children: [
      '/proxy/shadowsocks.md',
      '/proxy/cfw.md',
    ],
  },
  {
    text: '机场',
    children: [
      '/airport/glados.md'
    ]
  },
  {
    text: '网络',
    children: [
      '/network/github.md',
      '/network/google-play-alter.md',
    ]
  },
  {
    text: '隐私',
    children: [
      '/privacy/session.md'
    ]
  },
  '/about.md',
]
