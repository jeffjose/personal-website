<script lang="ts">
	type Kind = 'cube' | 'vitals' | 'fingerprint' | 'ball' | 'film' | 'credits';

	let {
		label,
		kind,
		caption,
		year,
		credits = [],
		href,
		italic = false
	}: {
		label: string;
		kind: Kind;
		caption?: string;
		/** Shown inside the frame for kind="film" */
		year?: number;
		/** Rolled like end credits for kind="credits" */
		credits?: { title: string; year: number }[];
		/** Makes the term a link as well */
		href?: string;
		italic?: boolean;
	} = $props();

	let host: HTMLElement;
	let tip: HTMLElement;
	let shift = $state(0);

	// Keep the popover inside the viewport when the term sits near an edge
	function place() {
		const pad = 12;
		const { left, width } = host.getBoundingClientRect();
		const start = left + width / 2 - tip.offsetWidth / 2;
		const end = start + tip.offsetWidth;
		if (start < pad) shift = pad - start;
		else if (end > window.innerWidth - pad) shift = window.innerWidth - pad - end;
		else shift = 0;
	}
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={host}
	{href}
	target={href ? '_blank' : undefined}
	rel={href ? 'noopener noreferrer' : undefined}
	class="hint text-foreground/90 decoration-foreground/30 relative inline-block whitespace-nowrap underline underline-offset-4 outline-none {href
		? ''
		: 'cursor-default decoration-dotted'} {italic ? 'italic' : ''}"
	role={href ? undefined : 'button'}
	tabindex={href ? undefined : 0}
	onmouseenter={place}
	onfocus={place}
>
	{label}
	<span
		bind:this={tip}
		role="tooltip"
		class="tip bg-card border-foreground/10 pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 flex flex-col items-center gap-3 rounded-xl border px-4 whitespace-normal not-italic shadow-xl shadow-black/30 {kind ===
		'film'
			? 'py-3'
			: 'w-44 pt-5 pb-3'}"
		style="--shift: {shift}px"
	>
		<span class="flex min-h-14 items-center justify-center">
			{#if kind === 'film'}
				<svg class="h-12 w-[4.5rem]" viewBox="0 0 72 48" fill="none">
					<rect x="1" y="1" width="70" height="46" rx="4" fill="currentColor" opacity="0.08" />
					<line class="sprockets" x1="0" y1="7" x2="72" y2="7" />
					<line class="sprockets" x1="0" y1="41" x2="72" y2="41" />
					<rect x="6" y="13" width="60" height="22" rx="2" stroke="currentColor" opacity="0.3" />
					<text
						x="36"
						y="28.5"
						text-anchor="middle"
						fill="currentColor"
						font-size="11"
						font-weight="600"
						style="font-variant-numeric: tabular-nums">{year}</text
					>
				</svg>
			{:else if kind === 'credits'}
				<span class="roll-window">
					<span class="roll">
						{#each credits as credit}
							<span class="flex justify-between gap-3 text-[11px] leading-5">
								<span class="text-foreground/90">{credit.title}</span>
								<span class="text-muted-foreground tabular-nums">{credit.year}</span>
							</span>
						{/each}
					</span>
				</span>
			{:else if kind === 'cube'}
				<span class="scene">
					<span class="cube">
						{#each ['front', 'back', 'left', 'right', 'top', 'bottom'] as face}
							<span class="face {face}"></span>
						{/each}
					</span>
				</span>
			{:else if kind === 'vitals'}
				<span class="flex gap-3">
					{#each ['LCP', 'INP', 'CLS'] as metric, i}
						<span class="flex flex-col items-center gap-1">
							<svg class="h-8 w-8 -rotate-90" viewBox="0 0 32 32" fill="none">
								<circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="3" opacity="0.15" />
								<circle
									class="ring"
									cx="16"
									cy="16"
									r="12"
									stroke="#0cce6b"
									stroke-width="3"
									stroke-linecap="round"
									pathLength="100"
									style="animation-delay: {i * 120}ms"
								/>
							</svg>
							<span class="text-muted-foreground text-[10px]">{metric}</span>
						</span>
					{/each}
				</span>
			{:else if kind === 'fingerprint'}
				<svg class="h-12 w-12" viewBox="0 0 48 48" fill="none" stroke="currentColor">
					{#each [20, 16, 12, 8, 4] as r, i}
						<path
							class="ridge"
							d="M {24 - r} 30 A {r} {r} 0 1 1 {24 + r} 30"
							stroke-width="1.5"
							stroke-linecap="round"
							pathLength="100"
							style="animation-delay: {i * -350}ms"
						/>
					{/each}
				</svg>
			{:else}
				<svg class="h-14 w-14" viewBox="0 0 56 56" fill="currentColor">
					<ellipse class="shadow" cx="28" cy="50" rx="10" ry="2" opacity="0.25" />
					<circle class="ball" cx="28" cy="38" r="9" />
				</svg>
			{/if}
		</span>
		{#if caption}
			<span class="text-muted-foreground text-center text-xs leading-snug">{caption}</span>
		{/if}
	</span>
</svelte:element>

<style>
	.tip {
		opacity: 0;
		translate: calc(-50% + var(--shift)) 4px;
		transition:
			opacity 150ms,
			translate 150ms;
	}
	.hint:hover .tip,
	.hint:focus .tip {
		opacity: 1;
		translate: calc(-50% + var(--shift)) 0;
	}

	/* Animations only run while the popover is showing */
	.tip :is(.cube, .ring, .ridge, .ball, .shadow, .sprockets, .roll) {
		animation-play-state: paused;
	}
	.hint:hover .tip :is(.cube, .ring, .ridge, .ball, .shadow, .sprockets, .roll),
	.hint:focus .tip :is(.cube, .ring, .ridge, .ball, .shadow, .sprockets, .roll) {
		animation-play-state: running;
	}

	/* Film frame with running sprocket holes */
	.sprockets {
		stroke: currentColor;
		stroke-width: 4;
		stroke-dasharray: 4 5;
		opacity: 0.45;
		animation: run 600ms linear infinite;
	}
	@keyframes run {
		to {
			stroke-dashoffset: -9;
		}
	}

	/* End-credits roll */
	.roll-window {
		display: block;
		width: 9rem;
		height: 4.5rem;
		overflow: hidden;
		mask-image: linear-gradient(transparent, black 25%, black 75%, transparent);
	}
	.roll {
		display: block;
		animation: roll 9s linear infinite;
	}
	@keyframes roll {
		from {
			transform: translateY(1.5rem);
		}
		to {
			transform: translateY(-100%);
		}
	}

	/* Wireframe cube */
	.scene {
		display: block;
		width: 32px;
		height: 32px;
		perspective: 160px;
	}
	.cube {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		animation: spin 6s linear infinite;
	}
	.face {
		position: absolute;
		inset: 0;
		border: 1.5px solid #3ddc84;
		background: rgb(61 220 132 / 0.06);
	}
	.front {
		transform: translateZ(16px);
	}
	.back {
		transform: rotateY(180deg) translateZ(16px);
	}
	.left {
		transform: rotateY(-90deg) translateZ(16px);
	}
	.right {
		transform: rotateY(90deg) translateZ(16px);
	}
	.top {
		transform: rotateX(90deg) translateZ(16px);
	}
	.bottom {
		transform: rotateX(-90deg) translateZ(16px);
	}
	@keyframes spin {
		from {
			transform: rotateX(-20deg) rotateY(0deg);
		}
		to {
			transform: rotateX(-20deg) rotateY(360deg);
		}
	}

	/* Core Web Vitals rings fill to "good" */
	.ring {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
	}
	.hint:hover .ring,
	.hint:focus .ring {
		animation: fill 700ms ease-out forwards;
	}
	@keyframes fill {
		to {
			stroke-dashoffset: 8;
		}
	}

	/* Fingerprint ridges that never settle into one pattern */
	.ridge {
		stroke-dasharray: 14 6 22 5 9 7;
		animation: scramble 2.4s ease-in-out infinite alternate;
	}
	@keyframes scramble {
		from {
			stroke-dashoffset: 0;
			opacity: 0.9;
		}
		to {
			stroke-dashoffset: 63;
			opacity: 0.45;
		}
	}

	/* Squash and stretch */
	.ball {
		transform-box: fill-box;
		transform-origin: 50% 100%;
		animation: bounce 900ms infinite;
	}
	.shadow {
		transform-box: fill-box;
		transform-origin: center;
		animation: shadow 900ms infinite;
	}
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(3px) scale(1.25, 0.7);
			animation-timing-function: cubic-bezier(0.2, 0.6, 0.4, 1);
		}
		12% {
			transform: translateY(-6px) scale(0.88, 1.14);
			animation-timing-function: cubic-bezier(0.2, 0.6, 0.4, 1);
		}
		50% {
			transform: translateY(-28px) scale(1, 1);
			animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.4);
		}
		90% {
			transform: translateY(-4px) scale(0.88, 1.14);
			animation-timing-function: linear;
		}
	}
	@keyframes shadow {
		0%,
		100% {
			transform: scale(1.1);
			opacity: 0.3;
		}
		50% {
			transform: scale(0.55);
			opacity: 0.12;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tip :is(.cube, .ridge, .ball, .shadow, .sprockets, .roll) {
			animation: none !important;
		}
		.roll-window {
			height: auto;
			mask-image: none;
		}
		.ring {
			stroke-dashoffset: 8;
			animation: none !important;
		}
	}
</style>
