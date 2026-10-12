<script lang="ts">
	type Kind =
		| 'compose'
		| 'schedule'
		| 'decode'
		| 'displays'
		| 'ball'
		| 'light'
		| 'render'
		| 'particles'
		| 'vitals'
		| 'fingerprint'
		| 'poster'
		| 'credits';

	type Slide = { kind: Kind; caption?: string };

	let {
		label,
		kind,
		caption,
		slides,
		poster,
		credits = [],
		href,
		italic = false
	}: {
		label: string;
		/** A single graphic. Use `slides` instead to cycle through several */
		kind?: Kind;
		caption?: string;
		/** Cycled one after another while the popover is open */
		slides?: Slide[];
		/** Image path for kind="poster" */
		poster?: string;
		/** Rolled like end credits for kind="credits" */
		credits?: { title: string; year: number }[];
		/** Makes the term a link as well */
		href?: string;
		italic?: boolean;
	} = $props();

	const uid = $props.id();
	const deck: Slide[] = $derived(slides ?? (kind ? [{ kind, caption }] : []));

	let host: HTMLElement;
	let tip: HTMLElement;
	let shift = $state(0);
	let index = $state(0);
	// Posters are only fetched once the popover has been opened
	let opened = $state(false);
	let timer: ReturnType<typeof setInterval> | undefined;

	const active = $derived(deck[index]);

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

	function show() {
		opened = true;
		place();
		if (deck.length > 1 && !timer) {
			timer = setInterval(() => (index = (index + 1) % deck.length), 2400);
		}
	}

	function hide() {
		clearInterval(timer);
		timer = undefined;
		index = 0;
	}

	// A clicked link keeps focus, which would leave its popover open behind the new tab
	function dismiss() {
		if (href) host.blur();
	}

	$effect(() => hide);
</script>

{#snippet tiles(color: string)}
	<svg class="h-11 w-[4.25rem]" viewBox="0 0 68 44" fill={color}>
		{#each Array(24) as _, i}
			<rect
				class="tile"
				x={1 + (i % 6) * 11}
				y={Math.floor(i / 6) * 11}
				width="10"
				height="10"
				rx="1.5"
				style="--peak: {0.35 + ((i * 7) % 5) * 0.15}; animation-delay: {i * 55}ms"
			/>
		{/each}
	</svg>
{/snippet}

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={host}
	{href}
	target={href ? '_blank' : undefined}
	rel={href ? 'noopener noreferrer' : undefined}
	class="hint text-foreground/90 decoration-foreground/30 relative inline-block cursor-pointer whitespace-nowrap underline underline-offset-4 outline-none {href
		? ''
		: 'decoration-dotted'} {italic ? 'italic' : ''}"
	role={href ? undefined : 'button'}
	tabindex={href ? undefined : 0}
	onmouseenter={show}
	onmouseleave={hide}
	onfocus={show}
	onblur={hide}
	onclick={dismiss}
>
	{label}
	<span
		bind:this={tip}
		role="tooltip"
		class="tip bg-card border-foreground/10 pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 flex flex-col items-center gap-3 rounded-xl border whitespace-normal not-italic shadow-xl shadow-black/30 {active?.kind ===
		'poster'
			? 'p-1.5'
			: active?.kind === 'credits'
				? 'px-4 py-3'
				: 'w-44 px-4 pt-5 pb-3'}"
		style="--shift: {shift}px"
	>
		{#key index}
			<span class="slide flex min-h-14 items-center justify-center">
				{#if active?.kind === 'compose'}
					<svg class="h-12 w-16" viewBox="0 0 64 48" fill="#3ddc84" stroke="#3ddc84">
						{#each [0, 1, 2] as i}
							<rect
								class="layer"
								x="14"
								y="12"
								width="36"
								height="24"
								rx="3"
								fill-opacity={0.12 + i * 0.1}
								stroke-width="1.5"
								style="--dx: {(i - 1) * 11}px; --dy: {(i - 1) * 8}px"
							/>
						{/each}
					</svg>
				{:else if active?.kind === 'schedule'}
					<svg class="h-12 w-[4.25rem]" viewBox="0 0 68 48" fill="none">
						{#each [6, 20, 34, 48, 62] as x}
							<line x1={x} y1="8" x2={x} y2="40" stroke="currentColor" opacity="0.3" />
						{/each}
						{#each [0, 1, 2, 3] as i}
							<rect
								class="frame"
								x={8 + i * 14}
								y="17"
								width="10"
								height="14"
								rx="2"
								fill="#3ddc84"
								style="animation-delay: {i * 400}ms"
							/>
						{/each}
					</svg>
				{:else if active?.kind === 'decode'}
					{@render tiles('#3ddc84')}
				{:else if active?.kind === 'displays'}
					<svg class="h-12 w-[4.5rem]" viewBox="0 0 72 48" fill="none" stroke="currentColor">
						<rect x="2" y="10" width="31" height="22" rx="2.5" opacity="0.5" stroke-width="1.5" />
						<rect x="39" y="10" width="31" height="22" rx="2.5" opacity="0.5" stroke-width="1.5" />
						<path d="M12 38h11M49 38h11" opacity="0.5" stroke-width="1.5" stroke-linecap="round" />
						<rect
							class="window"
							x="6"
							y="15"
							width="14"
							height="10"
							rx="1.5"
							fill="#3ddc84"
							stroke="none"
						/>
					</svg>
				{:else if active?.kind === 'ball'}
					<svg class="h-14 w-14" viewBox="0 0 56 56" fill="currentColor">
						<ellipse class="shadow" cx="28" cy="50" rx="10" ry="2" opacity="0.25" />
						<circle class="ball" cx="28" cy="38" r="9" />
					</svg>
				{:else if active?.kind === 'light'}
					<svg class="h-14 w-16" viewBox="0 0 64 56" fill="currentColor">
						<defs>
							<clipPath id="{uid}-sphere"><circle cx="32" cy="34" r="16" /></clipPath>
						</defs>
						<circle cx="32" cy="34" r="16" opacity="0.18" />
						<g clip-path="url(#{uid}-sphere)">
							<circle class="glint" cx="32" cy="34" r="12" opacity="0.8" />
						</g>
						<circle class="lamp" cx="32" cy="34" r="2.5" fill="#fbbf24" />
					</svg>
				{:else if active?.kind === 'render'}
					{@render tiles('currentColor')}
				{:else if active?.kind === 'particles'}
					<svg class="h-14 w-16" viewBox="0 0 64 56" fill="currentColor">
						{#each Array(9) as _, i}
							<circle
								class="particle"
								cx="32"
								cy="50"
								r={1.5 + (i % 3) * 0.6}
								style="--dx: {(i - 4) * 6}px; --dy: {-34 - ((i * 5) % 9)}px; animation-delay: {i *
									-160}ms"
							/>
						{/each}
					</svg>
				{:else if active?.kind === 'vitals'}
					<span class="flex gap-3">
						{#each ['LCP', 'INP', 'CLS'] as metric, i}
							<span class="flex flex-col items-center gap-1">
								<svg class="h-8 w-8 -rotate-90" viewBox="0 0 32 32" fill="none">
									<circle
										cx="16"
										cy="16"
										r="12"
										stroke="currentColor"
										stroke-width="3"
										opacity="0.15"
									/>
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
				{:else if active?.kind === 'fingerprint'}
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
				{:else if active?.kind === 'poster'}
					<span class="bg-muted block aspect-[2/3] w-32 overflow-hidden rounded-lg">
						{#if opened}
							<img src={poster} alt="{label} poster" class="h-full w-full object-cover" />
						{/if}
					</span>
				{:else if active?.kind === 'credits'}
					<span class="roll-window">
						<span class="roll" style="animation-duration: {credits.length * 1.4}s">
							{#each credits as credit}
								<span class="flex justify-between gap-6 text-[11px] leading-5 whitespace-nowrap">
									<span class="text-foreground/90">{credit.title}</span>
									<span class="text-muted-foreground tabular-nums">{credit.year}</span>
								</span>
							{/each}
						</span>
					</span>
				{/if}
			</span>
			{#if active?.caption}
				<span class="slide text-muted-foreground text-center text-xs leading-snug">
					{active.caption}
				</span>
			{/if}
		{/key}
		{#if deck.length > 1}
			<span class="flex gap-1">
				{#each deck as _, i}
					<span
						class="h-1 w-1 rounded-full transition-colors {i === index
							? 'bg-foreground/70'
							: 'bg-foreground/20'}"
					></span>
				{/each}
			</span>
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

	/* Each slide fades in as the deck advances */
	.slide {
		animation: appear 300ms ease-out;
	}
	@keyframes appear {
		from {
			opacity: 0;
		}
	}

	/* Graphics only animate while the popover is showing */
	.tip
		:is(
			.layer,
			.frame,
			.tile,
			.window,
			.ball,
			.shadow,
			.glint,
			.lamp,
			.particle,
			.ring,
			.ridge,
			.roll
		) {
		animation-play-state: paused;
	}
	.hint:is(:hover, :focus)
		.tip
		:is(
			.layer,
			.frame,
			.tile,
			.window,
			.ball,
			.shadow,
			.glint,
			.lamp,
			.particle,
			.ring,
			.ridge,
			.roll
		) {
		animation-play-state: running;
	}

	/* Composition: separate layers settle into one frame */
	.layer {
		animation: compose 1.6s ease-in-out infinite alternate;
	}
	@keyframes compose {
		0%,
		20% {
			transform: translate(var(--dx), var(--dy));
		}
		80%,
		100% {
			transform: translate(0, 0);
		}
	}

	/* Scheduling: one frame lands in each vsync interval */
	.frame {
		opacity: 0;
		animation: land 1.6s linear infinite;
	}
	@keyframes land {
		0% {
			opacity: 0;
			transform: translateY(-6px);
		}
		12%,
		70% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
		}
	}

	/* Image decoding and rendering: tiles resolve one after another */
	.tile {
		opacity: 0.1;
		animation: resolve 2.2s ease-out infinite;
	}
	@keyframes resolve {
		0% {
			opacity: 0.1;
		}
		12%,
		85% {
			opacity: var(--peak);
		}
		100% {
			opacity: 0.1;
		}
	}

	/* Multi-display: a window crosses from one screen to the other */
	.window {
		animation: cross 1.8s ease-in-out infinite alternate;
	}
	@keyframes cross {
		0%,
		15% {
			transform: translateX(0);
		}
		85%,
		100% {
			transform: translateX(46px);
		}
	}

	/* Animation: squash and stretch */
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

	/* Lighting: a lamp arcs over a sphere and the highlight follows */
	.glint {
		filter: blur(4px);
		animation: glint 2.2s ease-in-out infinite alternate;
	}
	.lamp {
		animation: lamp 2.2s ease-in-out infinite alternate;
	}
	@keyframes glint {
		0% {
			transform: translate(-11px, -5px);
		}
		50% {
			transform: translate(0, -11px);
		}
		100% {
			transform: translate(11px, -5px);
		}
	}
	@keyframes lamp {
		0% {
			transform: translate(-25px, -12px);
		}
		50% {
			transform: translate(0, -27px);
		}
		100% {
			transform: translate(25px, -12px);
		}
	}

	/* Effects: particles thrown up from an emitter */
	.particle {
		animation: emit 1.45s ease-out infinite;
	}
	@keyframes emit {
		from {
			transform: translate(0, 0);
			opacity: 0.9;
		}
		to {
			transform: translate(var(--dx), var(--dy));
			opacity: 0;
		}
	}

	/* Core Web Vitals rings fill to "good" */
	.ring {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
	}
	.hint:is(:hover, :focus) .ring {
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

	/* End-credits roll */
	.roll-window {
		display: block;
		height: 7rem;
		overflow: hidden;
		mask-image: linear-gradient(transparent, black 22%, black 78%, transparent);
	}
	.roll {
		display: block;
		animation: roll 18s linear infinite;
	}
	@keyframes roll {
		from {
			transform: translateY(2rem);
		}
		to {
			transform: translateY(-100%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tip
			:is(
				.layer,
				.frame,
				.tile,
				.window,
				.ball,
				.shadow,
				.glint,
				.lamp,
				.particle,
				.ridge,
				.roll
			) {
			animation: none !important;
		}
		.frame,
		.tile {
			opacity: 0.6;
		}
		.ring {
			stroke-dashoffset: 8;
			animation: none !important;
		}
		.roll-window {
			height: auto;
			mask-image: none;
		}
	}
</style>
