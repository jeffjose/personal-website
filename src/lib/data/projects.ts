export interface Project {
	name: string;
	dateRange: string;
	description: string;
	url: string;
	languages: string[];
}

export const projects: Project[] = [
	{
		name: 'loc',
		dateRange: '2026-present',
		description:
			'A fast lines-of-code counter that supports language filtering and git history visualization.',
		url: 'https://github.com/jeffjose/loc',
		languages: ['Rust']
	},
	{
		name: 'git-cal',
		dateRange: '2026-present',
		description:
			'A GitHub-style contribution calendar for your terminal with repo stats and language detection.',
		url: 'https://github.com/jeffjose/git-cal',
		languages: ['Rust']
	},
	{
		name: 'safeclean',
		dateRange: '2026-present',
		description:
			'A CLI tool for safely cleaning up build artifacts and dependency caches to reclaim disk space.',
		url: 'https://github.com/jeffjose/safeclean',
		languages: ['Rust']
	},
	{
		name: 'deb-downloader',
		dateRange: '2025',
		description:
			'A tool for downloading .deb packages directly from APT repositories without modifying sources.list.',
		url: 'https://github.com/jeffjose/deb-downloader',
		languages: ['Shell', 'Python']
	},
	{
		name: 'twig',
		dateRange: '2025-present',
		description:
			'A fast shell prompt generator written in Rust with daemon caching and multi-shell support.',
		url: 'https://github.com/jeffjose/twig',
		languages: ['Rust']
	},
	{
		name: 'utter',
		dateRange: '2025-present',
		description:
			'An Android-to-Linux dictation system that routes voice input from your phone to your computer as keyboard input.',
		url: 'https://github.com/jeffjose/utter',
		languages: ['TypeScript', 'Kotlin', 'Rust']
	},
	{
		name: 'plexman',
		dateRange: '2025-present',
		description: 'A modern SvelteKit 5 web application for managing and browsing Plex media libraries.',
		url: 'https://github.com/jeffjose/plexman',
		languages: ['Svelte', 'TypeScript', 'JavaScript']
	},
	{
		name: 'audtag',
		dateRange: '2025',
		description:
			'A command-line tool for automatically tagging audiobook files with metadata from Audible.com.',
		url: 'https://github.com/jeffjose/audtag',
		languages: ['Python', 'Shell']
	},
	{
		name: 'avatone',
		dateRange: '2025',
		description:
			'A unique avatar generator that creates consistent, deterministic avatars from input strings using duotone color palettes and abstract wave patterns.',
		url: 'https://github.com/jeffjose/avatone',
		languages: ['TypeScript', 'Svelte', 'JavaScript']
	},
	{
		name: 'seal',
		dateRange: '2025',
		description: 'A simple, secure file encryption CLI tool using AES-256-GCM with Argon2 key derivation.',
		url: 'https://github.com/jeffjose/seal',
		languages: ['Rust']
	}
];
