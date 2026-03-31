export type BannerStyle = 'mesh' | 'noise' | 'geometric' | 'dots' | 'waves';

export interface Project {
	name: string;
	dateRange: string;
	description: string;
	url?: string;
	languages: string[];
	icon: string;
	banner: BannerStyle;
}

export const projects: Project[] = [
	{
		name: 'icons',
		dateRange: '2026-present',
		description:
			'A fast, searchable browser for 200+ open-source icon sets with instant preview, copy, and export.',
		url: 'https://icons.jeffjose.workers.dev',
		languages: ['Svelte', 'TypeScript'],
		icon: 'Search',
		banner: 'mesh',
	},
	{
		name: 'hotshot',
		dateRange: '2026-present',
		description: 'A fast, zero-dependency screenshot tool for Linux.',
		url: 'https://github.com/jeffjose/hotshot',
		languages: ['Rust'],
		icon: 'Camera',
		banner: 'noise',
	},
	{
		name: 'duomo',
		dateRange: '2026-present',
		description: 'A keyboard-driven app launcher for Linux.',
		url: 'https://github.com/jeffjose/duomo',
		languages: ['Rust', 'Svelte', 'TypeScript'],
		icon: 'Rocket',
		banner: 'geometric',
	},
	{
		name: 'moneypile',
		dateRange: '2026-present',
		description: 'A personal finance tracker.',
		languages: ['Svelte', 'TypeScript'],
		icon: 'DollarSign',
		banner: 'dots',
	},
	{
		name: 'graphprix',
		dateRange: '2026-present',
		description:
			'A trading-terminal-style analysis tool for Formula 1 telemetry and race data.',
		url: 'https://github.com/jeffjose/graphprix',
		languages: ['Svelte', 'TypeScript', 'Python'],
		icon: 'Activity',
		banner: 'waves',
	},
	{
		name: 'plexcli',
		dateRange: '2026-present',
		description:
			'A single-file Python CLI to scan libraries, browse recent additions, and manage your Plex server.',
		languages: ['Python'],
		icon: 'SquareTerminal',
		banner: 'mesh',
	},
	{
		name: 'slides',
		dateRange: '2026-present',
		description: 'A presentation editor.',
		languages: ['Svelte', 'TypeScript'],
		icon: 'Presentation',
		banner: 'geometric',
	},
	{
		name: 'wat',
		dateRange: '2026-present',
		description:
			'A terminal tool to watch what LLM agents are doing to your files in real-time.',
		url: 'https://github.com/jeffjose/wat',
		languages: ['Rust'],
		icon: 'Eye',
		banner: 'noise',
	},
	{
		name: 'loc',
		dateRange: '2026-present',
		description:
			'A fast lines-of-code counter that supports language filtering and git history visualization.',
		url: 'https://github.com/jeffjose/loc',
		languages: ['Rust'],
		icon: 'Hash',
		banner: 'dots',
	},
	{
		name: 'git-cal',
		dateRange: '2026-present',
		description:
			'A GitHub-style contribution calendar for your terminal with repo stats and language detection.',
		url: 'https://github.com/jeffjose/git-cal',
		languages: ['Rust'],
		icon: 'Calendar',
		banner: 'waves',
	},
	{
		name: 'safeclean',
		dateRange: '2026-present',
		description:
			'A CLI tool for safely cleaning up build artifacts and dependency caches to reclaim disk space.',
		url: 'https://github.com/jeffjose/safeclean',
		languages: ['Rust'],
		icon: 'Eraser',
		banner: 'mesh',
	},
	{
		name: 'deb-downloader',
		dateRange: '2025',
		description:
			'A tool for downloading .deb packages directly from APT repositories without modifying sources.list.',
		url: 'https://github.com/jeffjose/deb-downloader',
		languages: ['Shell', 'Python'],
		icon: 'Download',
		banner: 'geometric',
	},
	{
		name: 'twig',
		dateRange: '2025-present',
		description: 'A fast shell prompt generator with daemon caching and multi-shell support.',
		url: 'https://github.com/jeffjose/twig',
		languages: ['Rust'],
		icon: 'Terminal',
		banner: 'noise',
	},
	{
		name: 'utter',
		dateRange: '2025-present',
		description:
			'A dictation system that routes voice input from your phone to your computer as keyboard input.',
		url: 'https://github.com/jeffjose/utter',
		languages: ['TypeScript', 'Kotlin', 'Rust'],
		icon: 'Mic',
		banner: 'dots',
	},
	{
		name: 'plexman',
		dateRange: '2025-present',
		description: 'A web application for managing and browsing Plex media libraries.',
		url: 'https://github.com/jeffjose/plexman',
		languages: ['Svelte', 'TypeScript', 'JavaScript'],
		icon: 'Film',
		banner: 'waves',
	},
	{
		name: 'audtag',
		dateRange: '2025',
		description:
			'A command-line tool for automatically tagging audiobook files with metadata from Audible.com.',
		url: 'https://github.com/jeffjose/audtag',
		languages: ['Python', 'Shell'],
		icon: 'Headphones',
		banner: 'mesh',
	},
	{
		name: 'avatone',
		dateRange: '2025',
		description:
			'A unique avatar generator that creates consistent, deterministic avatars from input strings.',
		url: 'https://github.com/jeffjose/avatone',
		languages: ['TypeScript', 'Svelte', 'JavaScript'],
		icon: 'Palette',
		banner: 'noise',
	},
	{
		name: 'seal',
		dateRange: '2025',
		description: 'A simple, secure file encryption tool.',
		url: 'https://github.com/jeffjose/seal',
		languages: ['Rust'],
		icon: 'Lock',
		banner: 'geometric',
	}
];
