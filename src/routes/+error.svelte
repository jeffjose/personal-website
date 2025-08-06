<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="min-h-screen">
	<div class="mx-auto max-w-2xl px-6 py-32">
		<div class="space-y-6">
			<p class="text-lg font-medium leading-relaxed text-foreground">
				{$page.status === 404 ? 'Page not found' : `Error ${$page.status}`}
			</p>
			<p class="text-base leading-relaxed text-muted-foreground">
				{$page.status === 404
					? "The page you're looking for doesn't exist."
					: $page.error?.message || 'Something went wrong.'}
			</p>
			<div class="mt-8">
				<a
					href="/"
					class="text-muted-foreground underline underline-offset-4 transition-opacity hover:text-foreground hover:opacity-100"
				>
					Go back home
				</a>
			</div>
		</div>
	</div>
</main>