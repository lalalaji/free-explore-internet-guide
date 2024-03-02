import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lalalaji.xyz',
	integrations: [
		starlight({
			title: '🪜无障碍网上冲浪指南🪜',
			favicon: './src/assets/favicon.ico',
			social: {
				github: 'https://github.com/lalalaji/free-explore-internet-guide',
			},
			editLink: {
				baseUrl:
					'https://github.com/lalalaji/free-explore-internet-guide/edit/main/',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						async: '',
						src: 'https://www.googletagmanager.com/gtag/js?id=G-MQYK3KRTDG',
					},
				},
				{
					tag: 'script',
					content: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-MQYK3KRTDG");',
				},
			],
			sidebar: [
				{
					label: '代理',
					autogenerate: { directory: 'proxy' },
				},
				{
					label: '机场',
					autogenerate: { directory: 'airport' },
				},
				{
					label: '网络',
					autogenerate: { directory: 'network' },
				},
				{
					label: '隐私',
					autogenerate: { directory: 'privacy' },
				},
				{
					label: '关于',
					link: '/about',
				},
			],
		}),
	],
});
