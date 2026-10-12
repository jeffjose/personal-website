export type Category = 'cli' | 'desktop' | 'android' | 'web';

export interface Project {
	name: string;
	year: number;
	description: string;
	/** Omit for private projects with nothing public to link to */
	url?: string;
	languages: string[];
	category: Category;
	/** One real invocation, shown on highlight cards */
	command?: string;
	stars?: number;
}

export const categories: { id: Category; label: string }[] = [
	{ id: 'cli', label: 'Command line' },
	{ id: 'desktop', label: 'Linux desktop' },
	{ id: 'android', label: 'Android' },
	{ id: 'web', label: 'Web' }
];

/** Shown as cards above the list, in this order */
export const highlights = [
	'icons',
	'graphprix',
	'jog',
	'moneypile',
	'aim',
	'magicfs',
	'seal',
	'tget',
	'safeclean',
	'mediainfo',
	'twig',
	'timeago-cli'
];

export const projects: Project[] = [
	// Command line
	{
		name: 'tget',
		year: 2016,
		description: 'wget for torrents. Hand it a magnet link or a torrent file and it downloads.',
		url: 'https://github.com/jeffjose/tget',
		languages: ['JavaScript'],
		category: 'cli',
		command: "tget 'magnet:?xt=urn:btih:…'",
		stars: 628
	},
	{
		name: 'wat',
		year: 2026,
		description: 'Watch what LLM agents are doing to your files, live in the terminal.',
		url: 'https://github.com/jeffjose/wat',
		languages: ['Rust'],
		category: 'cli',
		command: 'wat ~/project'
	},
	{
		name: 'magicfs',
		year: 2026,
		description:
			'Present a directory in whatever order you want, so that * expands to it. Sort, shuffle, filter.',
		url: 'https://github.com/jeffjose/magicfs',
		languages: ['Rust'],
		category: 'cli',
		command: 'magicfs -s random && feh *'
	},
	{
		name: 'ccpace',
		year: 2026,
		description: 'Am I over or under on Claude Code this week, and what to do about it.',
		url: 'https://github.com/jeffjose/ccpace',
		languages: ['Python'],
		category: 'cli'
	},
	{
		name: 'sesh',
		year: 2026,
		description: 'Move a Claude Code session between machines, git state included.',
		url: 'https://github.com/jeffjose/sesh',
		languages: ['Python'],
		category: 'cli'
	},
	{
		name: 'loc',
		year: 2026,
		description: 'A fast lines-of-code counter with language filtering and git history.',
		url: 'https://github.com/jeffjose/loc',
		languages: ['Rust'],
		category: 'cli'
	},
	{
		name: 'git-cal',
		year: 2026,
		description: 'A GitHub-style contribution calendar for your terminal.',
		url: 'https://github.com/jeffjose/git-cal',
		languages: ['Rust'],
		category: 'cli'
	},
	{
		name: 'safeclean',
		year: 2026,
		description: 'Safely clean up build artifacts and dependency caches to reclaim disk space.',
		url: 'https://github.com/jeffjose/safeclean',
		languages: ['Rust'],
		category: 'cli',
		command: 'safeclean ~/projects'
	},
	{
		name: 'wgqr',
		year: 2026,
		description: 'Generate WireGuard peer configs with QR codes.',
		url: 'https://github.com/jeffjose/wgqr',
		languages: ['Rust'],
		category: 'cli'
	},
	{
		name: 'pikpak',
		year: 2026,
		description: 'Submit magnet links to PikPak cloud storage.',
		url: 'https://github.com/jeffjose/pikpak',
		languages: ['Python'],
		category: 'cli'
	},
	{
		name: 'plexcli',
		year: 2026,
		description: 'A single-file CLI to scan libraries and manage a Plex server.',
		languages: ['Python'],
		category: 'cli'
	},
	{
		name: 'twig',
		year: 2025,
		description: 'A fast shell prompt with daemon caching and multi-shell support.',
		url: 'https://github.com/jeffjose/twig',
		languages: ['Rust'],
		category: 'cli',
		command: 'twig --prompt'
	},
	{
		name: 'seal',
		year: 2025,
		description: 'Simple, secure file encryption.',
		url: 'https://github.com/jeffjose/seal',
		languages: ['Rust'],
		category: 'cli',
		command: 'seal open -- mpv movie.mkv'
	},
	{
		name: 'randr',
		year: 2025,
		description: 'Grids of random strings to pick from: ids, tokens, names.',
		url: 'https://github.com/jeffjose/randr',
		languages: ['Rust'],
		category: 'cli'
	},
	{
		name: 'mediainfo',
		year: 2025,
		description: 'A media file analyzer with filtering, sorting, and caching.',
		url: 'https://github.com/jeffjose/mediainfo',
		languages: ['Rust'],
		category: 'cli',
		command: 'mediainfo ~/videos'
	},
	{
		name: 'audtag',
		year: 2025,
		description: 'Tag audiobook files with metadata from Audible.',
		url: 'https://github.com/jeffjose/audtag',
		languages: ['Python', 'Shell'],
		category: 'cli'
	},
	{
		name: 'stripaud',
		year: 2025,
		description: 'Interactively strip unwanted audio tracks from video files.',
		url: 'https://github.com/jeffjose/stripaud',
		languages: ['Python', 'Shell'],
		category: 'cli'
	},
	{
		name: 'deb-downloader',
		year: 2025,
		description: 'Download .deb packages from APT repositories without touching sources.list.',
		url: 'https://github.com/jeffjose/deb-downloader',
		languages: ['Python', 'Shell'],
		category: 'cli'
	},
	{
		name: 'mdbook-tailwindcss',
		year: 2022,
		description: 'An mdBook preprocessor for adding Tailwind classes to markdown.',
		url: 'https://github.com/jeffjose/mdbook-tailwindcss',
		languages: ['Rust'],
		category: 'cli'
	},
	{
		name: 'timeago-cli',
		year: 2020,
		description: 'Convert RFC 2822 dates to short humanized strings. Handy in prompts.',
		url: 'https://github.com/jeffjose/timeago-cli',
		languages: ['Rust'],
		category: 'cli',
		command: 'timeago "$(date -R)"'
	},

	// Linux desktop
	{
		name: 'hotshot',
		year: 2026,
		description: 'A fast, zero-dependency screenshot tool for Linux, on X11 and Wayland.',
		url: 'https://github.com/jeffjose/hotshot',
		languages: ['Rust'],
		category: 'desktop',
		command: 'hotshot capture region'
	},
	{
		name: 'jog',
		year: 2026,
		description: 'An image viewer. Like feh, but mine.',
		url: 'https://github.com/jeffjose/jog',
		languages: ['Rust'],
		category: 'desktop',
		command: 'jog ~/photos'
	},
	{
		name: 'duomo',
		year: 2026,
		description: 'A keyboard-driven app launcher.',
		url: 'https://github.com/jeffjose/duomo',
		languages: ['Rust', 'Svelte', 'TypeScript'],
		category: 'desktop'
	},

	// Android
	{
		name: 'aim',
		year: 2024,
		description: 'A better interface for adb. Same functionality, better UX.',
		url: 'https://github.com/jeffjose/aim',
		languages: ['Rust'],
		category: 'android',
		command: 'aim screenshot -o photo.png'
	},
	{
		name: 'droidshot',
		year: 2026,
		description:
			'Capture the UI state of an Android device into one file, then step through it in the browser.',
		url: 'https://github.com/jeffjose/droidshot',
		languages: ['Python', 'Svelte', 'TypeScript'],
		category: 'android'
	},
	{
		name: 'utter',
		year: 2025,
		description: 'Speak into your phone and have the text typed on your Linux computer.',
		url: 'https://github.com/jeffjose/utter',
		languages: ['TypeScript', 'Kotlin', 'Rust'],
		category: 'android'
	},

	// Web
	{
		name: 'icons',
		year: 2026,
		description:
			'A fast, searchable browser for 200+ open-source icon sets with instant preview, copy, and export.',
		url: 'https://icons.jeffjose.workers.dev',
		languages: ['Svelte', 'TypeScript'],
		category: 'web'
	},
	{
		name: 'redline',
		year: 2026,
		description:
			'A semantic diff viewer for prose: what an editor moved, reworded, split, merged, or cut.',
		url: 'https://github.com/jeffjose/redline',
		languages: ['TypeScript', 'Svelte'],
		category: 'web'
	},
	{
		name: 'graphprix',
		year: 2026,
		description: 'A trading-terminal-style analysis tool for Formula 1 telemetry and race data.',
		languages: ['Svelte', 'TypeScript', 'Python'],
		category: 'web'
	},
	{
		name: 'moneypile',
		year: 2026,
		description: 'A personal finance tracker.',
		languages: ['Svelte', 'TypeScript'],
		category: 'web'
	},
	{
		name: 'slides',
		year: 2026,
		description: 'A presentation editor.',
		languages: ['Svelte', 'TypeScript'],
		category: 'web'
	},
	{
		name: 'seed-web',
		year: 2026,
		description: 'My starting point for web apps: a shell with layout, type, and color decided.',
		url: 'https://github.com/jeffjose/seed-web',
		languages: ['Svelte', 'TypeScript'],
		category: 'web'
	},
	{
		name: 'timezone',
		year: 2025,
		description: 'Look up times across timezones.',
		url: 'https://timezone.jeffjose.workers.dev',
		languages: ['Svelte', 'TypeScript'],
		category: 'web'
	},
	{
		name: 'avatone',
		year: 2025,
		description: 'Deterministic avatars generated from any input string.',
		url: 'https://github.com/jeffjose/avatone',
		languages: ['TypeScript', 'Svelte'],
		category: 'web'
	},
	{
		name: 'plexman',
		year: 2025,
		description: 'A web app for browsing and managing Plex media libraries.',
		url: 'https://github.com/jeffjose/plexman',
		languages: ['Svelte', 'TypeScript'],
		category: 'web'
	}
];
