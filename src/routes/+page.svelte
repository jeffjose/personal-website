<script lang="ts">
	import { projects, categories, highlights } from '$lib/data/projects';
	import type { Category, Project } from '$lib/data/projects';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import Star from 'lucide-svelte/icons/star';

	const languageColors: Record<string, string> = {
		Rust: '#dea584',
		TypeScript: '#3178c6',
		JavaScript: '#f1e05a',
		Svelte: '#ff3e00',
		Python: '#3776ab',
		Kotlin: '#a97bff',
		Shell: '#89e051'
	};

	function getDotColor(lang: string): string {
		return languageColors[lang] || '#6b7280';
	}

	function isLive(url?: string): boolean {
		return !!url && !url.includes('github.com');
	}

	// Interleave categories so no one kind of project ends up at the bottom
	function mix(list: Project[]): Project[] {
		const queues = categories.map((c) => list.filter((p) => p.category === c.id));
		const out: Project[] = [];
		while (queues.some((q) => q.length > 0)) {
			for (const q of queues) {
				const next = q.shift();
				if (next) out.push(next);
			}
		}
		return out;
	}

	const featured = highlights.flatMap((name) => projects.find((p) => p.name === name) ?? []);
	const rest = projects.filter((p) => !highlights.includes(p.name));
	const years = [...new Set(rest.map((p) => p.year))].sort((a, b) => b - a);
	const mixed = years.flatMap((y) => mix(rest.filter((p) => p.year === y)));
	const filters = categories
		.map((c) => ({ ...c, count: rest.filter((p) => p.category === c.id).length }))
		.filter((c) => c.count > 0);

	let activeCategory = $state<Category | 'all'>('all');

	const listed = $derived(
		activeCategory === 'all' ? mixed : mixed.filter((p) => p.category === activeCategory)
	);
</script>

<main class="min-h-screen">
	<div class="mx-auto max-w-2xl px-6 py-16 sm:py-28">
		<div class="space-y-6">
			<div class="flex items-center justify-between">
				<h1 class="text-foreground text-2xl font-semibold tracking-tight">Hi, I’m Jeffrey</h1>
				<div class="flex items-center gap-4">
					<a
						href="https://twitter.com/jeffjose"
						aria-label="X (Twitter)"
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
						aria-label="GitHub"
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
						aria-label="LinkedIn"
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
				Product Manager at <span class="text-foreground/90">Google</span>, working on
				<span class="text-foreground/90">Android Graphics</span>.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				Previously at <span class="text-foreground/90">Google Search</span>, I led the launch of
				Core Web Vitals and Page Experience Ranking. The metrics became the industry standard for
				measuring web performance. Then on Chrome, I worked on anti-fingerprinting to make the web
				more private.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				Prior to that, I was a Lead Technical Director at
				<span class="text-foreground/90">DreamWorks Animation</span>. I worked on
				<em>How to Train Your Dragon 2</em>, <em>Madagascar 3</em>, <em>Puss in Boots</em>, and{' '}
				<a
					href="https://www.imdb.com/name/nm4162617/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground/90 decoration-foreground/30 underline underline-offset-4 transition-opacity hover:opacity-70"
				>
					several others</a
				>.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				I studied Electrical & Electronics Engineering at BITS Pilani and earned my MBA from The
				Wharton School.
			</p>
			<p class="text-muted-foreground text-base leading-relaxed">
				On the side, I build the tools I wish existed.
			</p>
			<div class="border-foreground/10 mt-10 border-t"></div>

			<!-- Projects Section -->
			<div class="mt-10 space-y-10">
				<div class="flex items-baseline justify-between">
					<h2 class="text-foreground text-xl font-semibold tracking-tight">
						Projects <span class="text-muted-foreground text-base font-normal"
							>{projects.length}</span
						>
					</h2>
					<a
						href="https://github.com/jeffjose?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-foreground text-xs transition-colors"
					>
						More on GitHub
					</a>
				</div>

				<!-- Highlights -->
				<div>
					<h3 class="text-foreground/90 mb-3 text-sm font-medium">
						Highlights
					</h3>
					<div class="grid gap-3 sm:grid-cols-2">
					{#each featured as project}
						<svelte:element
							this={project.url ? 'a' : 'div'}
							href={project.url}
							target={project.url ? '_blank' : undefined}
							rel={project.url ? 'noopener noreferrer' : undefined}
							class="group bg-card border-foreground/10 flex flex-col rounded-xl border p-4 transition-colors {project.url
								? 'hover:border-foreground/40'
								: ''}"
						>
							<div class="flex items-center justify-between gap-3">
								<h3 class="text-foreground font-medium tracking-tight">{project.name}</h3>
								{#if project.stars}
									<span class="text-muted-foreground flex items-center gap-1 text-xs tabular-nums">
										<Star class="h-3 w-3" />
										{project.stars}
									</span>
								{:else if project.url}
									<ArrowUpRight
										class="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors"
									/>
								{/if}
							</div>
							<p class="text-muted-foreground mt-1.5 flex-1 text-sm leading-relaxed">
								{project.description}
							</p>
							{#if project.command || isLive(project.url)}
								<div
									class="bg-background/60 text-foreground/70 mt-4 truncate rounded-md px-2.5 py-1.5 font-mono text-xs"
								>
									{#if project.command}
										<span class="text-muted-foreground mr-1.5 select-none">$</span>{project.command}
									{:else}
										{project.url?.replace(/^https?:\/\//, '')}
									{/if}
								</div>
							{/if}
							<div class="text-muted-foreground mt-3 flex items-center gap-3 text-xs">
								{#each project.languages as language}
									<span class="flex items-center gap-1.5">
										<span
											class="inline-block h-2 w-2 rounded-full"
											style={`background-color: ${getDotColor(language)};`}
										></span>
										{language}
									</span>
								{/each}
								<span class="ml-auto tabular-nums">{project.year}</span>
							</div>
						</svelte:element>
					{/each}
					</div>
				</div>

				<!-- Everything else -->
				<div>
					<h3 class="text-foreground/90 mb-3 text-sm font-medium">
						Everything else
					</h3>
					<div class="mb-4 flex flex-wrap gap-2">
						{#each [{ id: 'all' as const, label: 'All', count: rest.length }, ...filters] as filter}
							<button
								class="rounded-full px-3 py-1 text-xs transition-colors {activeCategory === filter.id
									? 'bg-foreground text-background'
									: 'bg-muted text-muted-foreground hover:text-foreground'}"
								onclick={() => (activeCategory = filter.id)}
							>
								{filter.label}
								<span class="tabular-nums opacity-60">{filter.count}</span>
							</button>
						{/each}
					</div>
						<ul>
							{#each listed as project (project.name)}
								<li>
									<svelte:element
										this={project.url ? 'a' : 'div'}
										href={project.url}
										target={project.url ? '_blank' : undefined}
										rel={project.url ? 'noopener noreferrer' : undefined}
										class="group -mx-3 flex flex-col gap-x-4 gap-y-0.5 rounded-lg px-3 py-2 transition-colors sm:flex-row sm:items-baseline {project.url
											? 'hover:bg-muted/60'
											: ''}"
									>
										<span
											class="text-foreground/90 shrink-0 text-sm font-medium sm:w-36 {project.url
												? 'group-hover:text-foreground'
												: ''}"
										>
											{project.name}
										</span>
										<span class="text-muted-foreground min-w-0 flex-1 text-sm leading-relaxed">
											{project.description}
										</span>
										<span
											class="text-muted-foreground flex shrink-0 items-center gap-2 text-xs tabular-nums sm:w-28 sm:justify-end"
										>
											{#if isLive(project.url)}
												<span class="text-foreground/90">live</span>
											{:else}
												<span class="flex items-center gap-1.5">
													<span
														class="inline-block h-2 w-2 rounded-full"
														style={`background-color: ${getDotColor(project.languages[0])};`}
													></span>
													{project.languages[0]}
												</span>
											{/if}
											<span>{project.year}</span>
										</span>
									</svelte:element>
								</li>
							{/each}
						</ul>
					</div>
			</div>
		</div>
	</div>
</main>
