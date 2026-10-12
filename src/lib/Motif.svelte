<script lang="ts">
	// A small glyph per project. It sits still, and animates while the enclosing `.group` is hovered.
	let { name, class: className = '' }: { name: string; class?: string } = $props();

	function star(cx: number, cy: number, r: number): string {
		const k = r * 0.24;
		return `M${cx} ${cy - r}L${cx + k} ${cy - k}L${cx + r} ${cy}L${cx + k} ${cy + k}L${cx} ${cy + r}L${cx - k} ${cy + k}L${cx - r} ${cy}L${cx - k} ${cy - k}Z`;
	}
</script>

<svg
	class="motif {className}"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'icons'}
		<!-- a set of shapes taking turns -->
		<rect class="pop" x="3" y="3" width="7" height="7" rx="1.5" />
		<circle class="pop" cx="17.5" cy="6.5" r="3.5" style="animation-delay: 200ms" />
		<path class="pop" d="M6.5 14L10 20.5H3Z" style="animation-delay: 600ms" />
		<path class="pop" d="M17.5 13.5L21 17L17.5 20.5L14 17Z" style="animation-delay: 400ms" />
	{:else if name === 'graphprix'}
		<!-- a telemetry trace drawing itself -->
		<path d="M2 20h20" opacity="0.35" />
		<path class="trace" d="M2 15h3l2.5-8 3 7 2.5-10 3 12 2-5h4" pathLength="100" />
	{:else if name === 'jog'}
		<!-- one picture giving way to the next -->
		<rect x="2.5" y="4.5" width="19" height="15" rx="2" />
		<g class="shot-a">
			<circle cx="8" cy="9.5" r="1.5" />
			<path d="M3 17l5-4.5 3.5 3 3.5-4.5 6 6" />
		</g>
		<g class="shot-b">
			<circle cx="12" cy="12" r="3.5" />
			<path d="M5.5 8h2M16.5 16h2" />
		</g>
	{:else if name === 'moneypile'}
		<!-- coins landing on the pile -->
		<ellipse class="coin" cx="12" cy="17.5" rx="7.5" ry="2.75" />
		<ellipse class="coin" cx="12" cy="12.5" rx="7.5" ry="2.75" style="animation-delay: 250ms" />
		<ellipse class="coin" cx="12" cy="7.5" rx="7.5" ry="2.75" style="animation-delay: 500ms" />
	{:else if name === 'aim'}
		<!-- computer talking to a phone -->
		<rect x="2" y="6.5" width="9.5" height="7" rx="1" />
		<path d="M1 16.5h11.5" />
		<rect x="18" y="5" width="4.5" height="13" rx="1.25" />
		<circle class="packet" cx="13" cy="10.5" r="0.6" fill="currentColor" />
		<circle
			class="packet"
			cx="13"
			cy="10.5"
			r="0.6"
			fill="currentColor"
			style="animation-delay: 450ms"
		/>
	{:else if name === 'magicfs'}
		<!-- directory entries changing order -->
		<path class="row-a" d="M4 6.5h16" />
		<path d="M4 12h8" />
		<path class="row-b" d="M4 17.5h12" />
	{:else if name === 'seal'}
		<!-- a lock opening and snapping shut -->
		<path class="shackle" d="M8 11V8a4 4 0 0 1 8 0v3" />
		<rect x="5" y="11" width="14" height="10" rx="2" />
		<path d="M12 15v2" />
	{:else if name === 'tget'}
		<!-- pieces pulled down into a magnet -->
		<path d="M5 11v3a7 7 0 0 0 14 0v-3h-4v3a3 3 0 0 1-6 0v-3Z" />
		<circle class="piece" cx="12" cy="3" r="0.75" fill="currentColor" />
		<circle
			class="piece"
			cx="9"
			cy="2"
			r="0.75"
			fill="currentColor"
			style="animation-delay: 300ms"
		/>
		<circle
			class="piece"
			cx="15"
			cy="2.5"
			r="0.75"
			fill="currentColor"
			style="animation-delay: 600ms"
		/>
	{:else if name === 'safeclean'}
		<!-- what is left after a cleanup -->
		<path class="twinkle" d={star(10, 13, 7)} />
		<path class="twinkle" d={star(18.5, 5.5, 3)} style="animation-delay: 350ms" />
		<path class="twinkle" d={star(19.5, 18.5, 2)} style="animation-delay: 700ms" />
	{:else if name === 'mediainfo'}
		<!-- a clip and its details reading out -->
		<rect x="2" y="5" width="11" height="14" rx="2" />
		<path d="M6.25 9.5v5l4-2.5Z" />
		<path class="readout" d="M16 8h6" />
		<path class="readout" d="M16 12h4" style="animation-delay: 200ms" />
		<path class="readout" d="M16 16h5.5" style="animation-delay: 400ms" />
	{:else if name === 'twig'}
		<!-- a prompt with a segment and a cursor -->
		<path d="M4 7l5 5-5 5" />
		<rect class="segment" x="12" y="6" width="9" height="3" rx="1.5" />
		<path class="cursor" d="M12.5 17h6" />
	{:else if name === 'timeago-cli'}
		<!-- time passing -->
		<circle cx="12" cy="12" r="9" />
		<path class="hand-hour" d="M12 12V8" />
		<path class="hand-minute" d="M12 12h4.5" />
	{/if}
</svg>

<style>
	.motif :is(.pop, .coin, .twinkle, .segment) {
		transform-box: fill-box;
		transform-origin: center;
	}
	.motif :is(.readout, .segment) {
		transform-box: fill-box;
		transform-origin: left;
	}
	.motif :is(.hand-hour, .hand-minute) {
		transform-origin: 12px 12px;
	}
	.shot-b {
		opacity: 0;
	}

	:global(.group:hover) .pop {
		animation: pop 1.6s ease-in-out infinite;
	}
	:global(.group:hover) .trace {
		stroke-dasharray: 100;
		animation: trace 1.8s ease-out infinite;
	}
	:global(.group:hover) .shot-a {
		animation: shot-a 3s ease-in-out infinite;
	}
	:global(.group:hover) .shot-b {
		animation: shot-b 3s ease-in-out infinite;
	}
	:global(.group:hover) .coin {
		animation: coin 1.6s ease-out infinite both;
	}
	:global(.group:hover) .packet {
		animation: packet 900ms linear infinite both;
	}
	:global(.group:hover) .row-a {
		animation: row-a 2.4s ease-in-out infinite;
	}
	:global(.group:hover) .row-b {
		animation: row-b 2.4s ease-in-out infinite;
	}
	:global(.group:hover) .shackle {
		animation: shackle 1.8s ease-in-out infinite;
	}
	:global(.group:hover) .piece {
		animation: piece 1s ease-in infinite both;
	}
	:global(.group:hover) .twinkle {
		animation: twinkle 1.4s ease-in-out infinite;
	}
	:global(.group:hover) .readout {
		animation: readout 1.8s ease-out infinite both;
	}
	:global(.group:hover) .segment {
		animation: readout 2s ease-out infinite;
	}
	:global(.group:hover) .cursor {
		animation: cursor 1s steps(1) infinite;
	}
	:global(.group:hover) .hand-minute {
		animation: turn 1.5s linear infinite;
	}
	:global(.group:hover) .hand-hour {
		animation: turn 18s linear infinite;
	}

	@keyframes pop {
		0%,
		40%,
		100% {
			transform: scale(1);
		}
		20% {
			transform: scale(1.22);
		}
	}
	@keyframes trace {
		0% {
			stroke-dashoffset: 100;
		}
		70%,
		100% {
			stroke-dashoffset: 0;
		}
	}
	@keyframes shot-a {
		0%,
		40%,
		100% {
			opacity: 1;
		}
		50%,
		90% {
			opacity: 0;
		}
	}
	@keyframes shot-b {
		0%,
		40%,
		100% {
			opacity: 0;
		}
		50%,
		90% {
			opacity: 1;
		}
	}
	@keyframes coin {
		0% {
			transform: translateY(-7px);
			opacity: 0;
		}
		25%,
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes packet {
		0% {
			transform: translateX(0);
			opacity: 0;
		}
		20%,
		80% {
			opacity: 1;
		}
		100% {
			transform: translateX(4.5px);
			opacity: 0;
		}
	}
	@keyframes row-a {
		0%,
		20%,
		90%,
		100% {
			transform: translateY(0);
		}
		40%,
		70% {
			transform: translateY(11px);
		}
	}
	@keyframes row-b {
		0%,
		20%,
		90%,
		100% {
			transform: translateY(0);
		}
		40%,
		70% {
			transform: translateY(-11px);
		}
	}
	@keyframes shackle {
		0%,
		60%,
		100% {
			transform: translateY(0);
		}
		25%,
		45% {
			transform: translateY(-2.5px);
		}
	}
	@keyframes piece {
		0% {
			transform: translateY(-1px);
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		100% {
			transform: translateY(8px);
			opacity: 0;
		}
	}
	@keyframes twinkle {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(0.45);
			opacity: 0.35;
		}
	}
	@keyframes readout {
		0% {
			transform: scaleX(0);
		}
		30%,
		100% {
			transform: scaleX(1);
		}
	}
	@keyframes cursor {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
	@keyframes turn {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.motif :global(*) {
			animation: none !important;
		}
	}
</style>
