<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<main class="min-h-screen">
	<div class="mx-auto max-w-2xl px-6 py-32">
		<div class="space-y-6">
			<p class="text-lg font-medium leading-relaxed text-foreground">
				Hi, I'm Jeffrey
			</p>
			<p class="text-base leading-relaxed text-muted-foreground">
				I'm a Product Manager on Android Graphics, working on building the world's most advanced
				mobile graphics stack. I focus on making the rendering pipeline faster, more efficient, and more
				capable for the next generation of mobile experiences.
			</p>
			<p class="text-base leading-relaxed text-muted-foreground">
				Previously at Google Search, I led the launch of Core Web Vitals, metrics that became the
				industry standard for measuring web performance, alongside Page Experience Ranking. At
				Chrome, I led anti-fingerprinting initiatives to strengthen user privacy across the web.
			</p>
			<p class="text-base leading-relaxed text-muted-foreground">
				Prior to that, I was a Lead Technical Director at DreamWorks Animation, working on films like
				How To Train Your Dragon 2, Madagascar 3, Puss In Boots, and{' '}
				<a
					href="https://www.imdb.com/name/nm4162617/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
				>
					several others</a
				>.
			</p>
			<p class="text-base leading-relaxed text-muted-foreground">
				I studied Electrical & Electronics Engineering at BITS Pilani and earned my MBA from The
				Wharton School.
			</p>
			<div class="mt-8 flex gap-6">
				<a
					href="https://twitter.com/jeffjose"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
						/>
					</svg>
					<span>Twitter</span>
				</a>
				<a
					href="https://github.com/jeffjose"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
						/>
					</svg>
					<span>GitHub</span>
				</a>
				<a
					href="https://linkedin.com/in/jeffreyjose"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
					<span>LinkedIn</span>
				</a>
			</div>

			<!-- Projects Section -->
			<div class="mt-16 space-y-8">
				<h2 class="text-lg font-medium text-foreground">Projects</h2>

				{#each projects as project}
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="space-y-1">
							{#if project.url}
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-base font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
								>
									{project.name}
								</a>
							{:else}
								<h3 class="text-base font-medium text-foreground">{project.name}</h3>
							{/if}
							<p class="text-sm text-muted-foreground">{project.dateRange}</p>
						</div>
						<div>
							<p class="text-base leading-relaxed text-muted-foreground">
								{project.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>