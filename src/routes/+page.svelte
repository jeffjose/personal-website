<script lang="ts">
	import { projects } from '$lib/data/projects';
	import type { BannerStyle } from '$lib/data/projects';
	import Camera from 'lucide-svelte/icons/camera';
	import Rocket from 'lucide-svelte/icons/rocket';
	import Activity from 'lucide-svelte/icons/activity';
	import Eye from 'lucide-svelte/icons/eye';
	import Hash from 'lucide-svelte/icons/hash';
	import Calendar from 'lucide-svelte/icons/calendar';
	import Eraser from 'lucide-svelte/icons/eraser';
	import Download from 'lucide-svelte/icons/download';
	import Terminal from 'lucide-svelte/icons/terminal';
	import Mic from 'lucide-svelte/icons/mic';
	import Film from 'lucide-svelte/icons/film';
	import Headphones from 'lucide-svelte/icons/headphones';
	import Palette from 'lucide-svelte/icons/palette';
	import Lock from 'lucide-svelte/icons/lock';
	import Search from 'lucide-svelte/icons/search';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import SquareTerminal from 'lucide-svelte/icons/square-terminal';
	import Presentation from 'lucide-svelte/icons/presentation';

	const languageColors: Record<string, string> = {
		Rust: '#dea584',
		TypeScript: '#3178c6',
		JavaScript: '#f1e05a',
		Svelte: '#ff3e00',
		Python: '#3776ab',
		Kotlin: '#a97bff',
		Shell: '#89e051'
	};

	const iconMap: Record<string, typeof Camera> = {
		Camera,
		Rocket,
		Activity,
		Eye,
		Hash,
		Calendar,
		Eraser,
		Download,
		Terminal,
		Mic,
		Film,
		Headphones,
		Palette,
		Lock,
		Search,
		DollarSign,
		SquareTerminal,
		Presentation
	};

	// Each project gets a unique color palette for its banner
	const bannerColors: Record<string, [string, string, string]> = {
		icons: ['#6366f1', '#8b5cf6', '#a78bfa'],
		hotshot: ['#ef4444', '#f97316', '#fbbf24'],
		duomo: ['#06b6d4', '#3b82f6', '#6366f1'],
		moneypile: ['#10b981', '#34d399', '#6ee7b7'],
		graphprix: ['#f43f5e', '#e11d48', '#be123c'],
		plexcli: ['#f59e0b', '#d97706', '#b45309'],
		slides: ['#8b5cf6', '#a855f7', '#d946ef'],
		wat: ['#14b8a6', '#0d9488', '#0f766e'],
		loc: ['#f97316', '#fb923c', '#fdba74'],
		'git-cal': ['#22c55e', '#16a34a', '#15803d'],
		safeclean: ['#3b82f6', '#2563eb', '#1d4ed8'],
		'deb-downloader': ['#64748b', '#475569', '#334155'],
		twig: ['#84cc16', '#a3e635', '#d9f99d'],
		utter: ['#ec4899', '#f472b6', '#f9a8d4'],
		plexman: ['#eab308', '#facc15', '#fde047'],
		audtag: ['#7c3aed', '#8b5cf6', '#a78bfa'],
		avatone: ['#f43f5e', '#fb7185', '#fda4af'],
		seal: ['#0ea5e9', '#38bdf8', '#7dd3fc']
	};

	function getBannerStyle(name: string, banner: BannerStyle): string {
		const [c1, c2, c3] = bannerColors[name] || ['#6366f1', '#8b5cf6', '#a78bfa'];
		switch (banner) {
			case 'mesh':
				return `background: ${c1}; background-image: radial-gradient(at 40% 20%, ${c2} 0px, transparent 50%), radial-gradient(at 80% 0%, ${c3} 0px, transparent 50%), radial-gradient(at 0% 50%, ${c1} 0px, transparent 50%), radial-gradient(at 80% 80%, ${c2} 0px, transparent 50%), radial-gradient(at 0% 100%, ${c3} 0px, transparent 50%);`;
			case 'noise':
				return `background: linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%); background-size: 100% 100%;`;
			case 'geometric':
				return `background-color: ${c1}; background-image: linear-gradient(30deg, ${c2}44 12%, transparent 12.5%, transparent 87%, ${c2}44 87.5%, ${c2}44), linear-gradient(150deg, ${c2}44 12%, transparent 12.5%, transparent 87%, ${c2}44 87.5%, ${c2}44), linear-gradient(30deg, ${c2}44 12%, transparent 12.5%, transparent 87%, ${c2}44 87.5%, ${c2}44), linear-gradient(150deg, ${c2}44 12%, transparent 12.5%, transparent 87%, ${c2}44 87.5%, ${c2}44), linear-gradient(60deg, ${c3}33 25%, transparent 25.5%, transparent 75%, ${c3}33 75%, ${c3}33), linear-gradient(60deg, ${c3}33 25%, transparent 25.5%, transparent 75%, ${c3}33 75%, ${c3}33); background-size: 40px 70px; background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;`;
			case 'dots':
				return `background-color: ${c1}; background-image: radial-gradient(${c3}66 1.5px, transparent 1.5px); background-size: 16px 16px;`;
			case 'waves':
				return `background: linear-gradient(135deg, ${c1} 25%, transparent 25%) -50px 0, linear-gradient(225deg, ${c1} 25%, transparent 25%) -50px 0, linear-gradient(315deg, ${c1} 25%, transparent 25%), linear-gradient(45deg, ${c1} 25%, transparent 25%); background-size: 100px 50px; background-color: ${c2};`;
			default:
				return `background: ${c1};`;
		}
	}

	function needsDarkText(name: string): boolean {
		const lightBanners = ['plexman', 'twig', 'moneypile', 'loc', 'utter'];
		return lightBanners.includes(name);
	}

	function getDotColor(lang: string): string {
		return languageColors[lang] || '#6b7280';
	}

	// Filter state
	let activeFilter = $state('All');

	const allLanguages = [...new Set(projects.flatMap((p) => p.languages))].sort();

	const filteredProjects = $derived(
		activeFilter === 'All'
			? projects
			: projects.filter((p) => p.languages.includes(activeFilter))
	);
</script>

<main class="min-h-screen">
	<div class="mx-auto max-w-2xl px-6 py-32">
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<p class="text-foreground text-lg leading-relaxed font-medium">Hi, I'm Jeffrey</p>
				<div class="flex items-center gap-4">
					<a
						href="https://twitter.com/jeffjose"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/jeffjose"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
							/>
						</svg>
					</a>
					<a
						href="https://linkedin.com/in/jeffreyjose"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground transition-colors"
					>
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<p class="text-muted-foreground text-base leading-relaxed">
				I'm a Product Manager at
				<span class="inline-flex items-baseline gap-1">
					<svg class="inline h-3.5 w-3.5 self-center" viewBox="0 0 24 24" fill="none">
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
					</svg>
					<span class="text-foreground/70">Google</span></span
				>, working on
				<span class="inline-flex items-baseline gap-1">
					<svg class="inline h-3.5 w-3.5 self-center" viewBox="0 0 24 24" fill="#3DDC84">
						<path
							d="M17.523 15.341c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-11.046 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm11.4-6.7l1.93-3.35c.11-.19.05-.43-.14-.54-.19-.11-.43-.05-.54.14l-1.95 3.38C15.47 7.64 13.79 7.27 12 7.27s-3.47.37-5.17 1.01L4.88 4.9c-.11-.19-.35-.25-.54-.14-.19.11-.25.35-.14.54l1.93 3.35C2.92 10.41 1 13.27 1 16.5h22c0-3.23-1.92-6.09-5.12-7.86z"
						/>
					</svg>
					<span class="text-foreground/70">Android Graphics</span></span
				>.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				Previously at
				<span class="inline-flex items-baseline gap-1">
					<svg class="inline h-3.5 w-3.5 self-center" viewBox="0 0 24 24" fill="none">
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
					</svg>
					<span class="text-foreground/70">Google Search</span></span
				>, I led the launch of Core Web Vitals, metrics that became the industry standard for
				measuring web performance, alongside Page Experience Ranking. At Chrome, I worked on anti-fingerprinting to make the web more private.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				Prior to that, I was a Lead Technical Director at
				<span class="inline-flex items-baseline gap-1">
					<svg
						class="text-muted-foreground inline h-3.5 w-3.5 self-center"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"
						/>
					</svg>
					<span class="text-foreground/70">DreamWorks Animation</span></span
				>. I worked on movies like How To Train Your Dragon 2, Madagascar 3, Puss In Boots, and{' '}
				<a
					href="https://www.imdb.com/name/nm4162617/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground/70 underline underline-offset-4 transition-opacity hover:opacity-70"
				>
					several others</a
				>.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				I studied Electrical & Electronics Engineering at BITS Pilani and earned my MBA from The
				Wharton School.
			</p>
			<div class="border-border/30 mt-16 border-t"></div>

			<!-- Projects Section -->
			<div class="mt-10 space-y-6">
				<h2 class="text-foreground text-xl font-semibold">
					Projects <span class="text-muted-foreground text-base font-normal">{filteredProjects.length}</span>
				</h2>

				<div class="flex flex-wrap gap-2">
					<button
						class="rounded-full px-3 py-1 text-xs transition-colors {activeFilter === 'All' ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:text-foreground'}"
						onclick={() => activeFilter = 'All'}
					>All</button>
					{#each allLanguages as lang}
						<button
							class="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs transition-colors {activeFilter === lang ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:text-foreground'}"
							onclick={() => activeFilter = lang}
						>
							<span
								class="inline-block h-2 w-2 rounded-full"
								style={`background-color: ${getDotColor(lang)};`}
							></span>
							{lang}
						</button>
					{/each}
				</div>

				<div class="flex flex-col gap-10">
					{#each filteredProjects as project, i}
						{@const Tag = project.url ? 'a' : 'div'}
						<div>
							<svelte:element
								this={Tag}
								href={project.url || undefined}
								target={project.url ? '_blank' : undefined}
								rel={project.url ? 'noopener noreferrer' : undefined}
								class="border-border hover:border-foreground/30 group block overflow-hidden rounded-2xl border transition-all duration-200 hover:shadow-lg {project.url ? 'cursor-pointer' : 'cursor-default'}"
							>
								<!-- Banner -->
								<div
									class="relative h-40 overflow-hidden"
									style={getBannerStyle(project.name, project.banner)}
								>
									{#if project.banner === 'noise'}
										<svg class="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
											<filter id="noise-{project.name}">
												<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
											</filter>
											<rect width="100%" height="100%" filter="url(#noise-{project.name})" />
										</svg>
									{/if}
									<div class="absolute inset-0 flex items-center justify-center">
										<svelte:component this={iconMap[project.icon]} class="h-10 w-10 text-white/80" strokeWidth={1.5} />
									</div>
								</div>
								<!-- Content -->
								<div class="px-6 py-5">
									<div class="flex items-baseline justify-between">
										<h3 class="text-foreground/70 text-lg font-medium tracking-tight">{project.name}</h3>
										<span class="text-muted-foreground text-xs">{project.dateRange}</span>
									</div>
									<p class="text-muted-foreground mt-2 text-sm leading-relaxed">
										{project.description}
									</p>
								</div>
								<!-- Footer -->
								<div class="bg-muted/60 px-6 py-3">
									<div class="flex items-center justify-between">
										<div class="flex items-center gap-3">
											{#each project.languages as language}
												<span class="text-muted-foreground flex items-center gap-1.5 text-xs">
													<span
														class="inline-block h-2 w-2 rounded-full"
														style={`background-color: ${getDotColor(language)};`}
													></span>
													{language}
												</span>
											{/each}
										</div>
										{#if project.url}
											<span class="text-muted-foreground text-xs underline underline-offset-2 transition-colors group-hover:text-foreground">
												{project.url.replace(/^https?:\/\//, '')}
											</span>
										{/if}
									</div>
								</div>
							</svelte:element>

							{#if i < filteredProjects.length - 1}
								<div class="border-border/30 mt-10 border-t"></div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
