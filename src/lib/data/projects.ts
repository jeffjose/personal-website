export interface Project {
	name: string;
	dateRange: string;
	description: string;
	url: string;
	languages: string[];
}

export const projects: Project[] = [
	{
		name: 'twig',
		dateRange: '2025-present',
		description: 'A modern, fast and customizable prompt.',
		url: 'https://github.com/jeffjose/twig',
		languages: ['Rust']
	},
	{
		name: 'utter',
		dateRange: '2025-present',
		description: 'Speech-to-text for Linux, using your mobile phone.',
		url: 'https://github.com/jeffjose/utter',
		languages: ['TypeScript', 'Kotlin', 'Rust']
	},
	{
		name: 'plexman',
		dateRange: '2025-present',
		description: 'A simple Plex library manager.',
		url: 'https://github.com/jeffjose/plexman',
		languages: ['Svelte', 'TypeScript', 'JavaScript']
	},
	{
		name: 'audtag',
		dateRange: '2025',
		description: 'Tag audiobooks on commandline.',
		url: 'https://github.com/jeffjose/audtag',
		languages: ['Python', 'Shell']
	},
	{
		name: 'avatone',
		dateRange: '2025',
		description: 'Generate unique avatars for your next project.',
		url: 'https://github.com/jeffjose/avatone',
		languages: ['TypeScript', 'Svelte', 'JavaScript']
	},
	{
		name: 'seal',
		dateRange: '2025',
		description: 'A simple, secure file encryption tool that makes it easy to protect your sensitive files.',
		url: 'https://github.com/jeffjose/seal',
		languages: ['Rust']
	}
];
