import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/proxy': [
    '/proxy/shadowsocks.md',
    '/proxy/cfw.md',
    '/proxy/cfa.md',
    '/proxy/switchyomega.md',
  ],
  '/airport': [
    '/airport/glados.md',
  ],
  '/privacy': [
    '/privacy/session.md',
    '/privacy/syncthing.md',
  ],
  '/network': [
    '/network/github.md',
    '/network/google-play-alter.md',
    '/network/dns.md',
  ],
  '/about': [
    '/about.md'
  ]
}
