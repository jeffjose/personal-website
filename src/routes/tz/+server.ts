import { redirect } from '@sveltejs/kit';

export function GET() {
	redirect(308, 'https://timezone.jeffjose.workers.dev');
}
