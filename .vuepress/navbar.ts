import type { HopeThemeNavbarConfig } from "vuepress-theme-hope";

export const navbar: HopeThemeNavbarConfig = [
  {
    text: '代理',
    children: [
      '/proxy/cfa.md',
      '/proxy/cfw.md',
      '/proxy/clash.md',
      '/proxy/free-cloudflare-worker-proxy',
      '/proxy/openclash.md',
      '/proxy/shadowsocks.md',
      '/proxy/switchyomega.md',
    ],
  },
  {
    text: '机场',
    children: [
      '/airport/glados.md',
      '/airport/sockboom.md'
    ]
  },
  {
    text: '网络',
    children: [
      '/network/github.md',
      '/network/google-play-alter.md',
      '/network/dns.md',
    ]
  },
  {
    text: '隐私',
    children: [
      '/privacy/session.md',
      '/privacy/syncthing.md',
      '/privacy/tor.md',
      '/privacy/warp.md',
    ]
  },
  '/about.md',
]
