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
				baseUrl: 'https://github.com/lalalaji/free-explore-internet-guide/edit/main/docs/',
			},
			sidebar: [{
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
				autogenerate: { directory: 'privacy' }
			},
			{
				label: '关于',
				link: '/about'
			}],
		}),
	],
});
