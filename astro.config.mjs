// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Uncomment and set your real URL to enable the sitemap (removes the build warning):
	// site: 'http://YOUR-DOMAIN-OR-IP',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Levi67/Wiki' },
			],
			sidebar: [
				{
					label: 'Guides',
					// Picks up everything in src/content/docs/guides,
					// including subfolders like Hermes-App (shown as a nested group)
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
