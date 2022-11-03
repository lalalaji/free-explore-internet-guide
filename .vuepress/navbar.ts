import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  {
    text: '代理',
    children: ['/proxy/cfw.md', 'proxy/shadowsocks.md'],
  },
  {
    text: '机场',
    children: ['/airport/glados.md']
  },
  {
    text: '隐私',
    children: ['/privacy/session.md']
  }
]
