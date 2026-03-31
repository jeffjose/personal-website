import { redirect } from '@sveltejs/kit';

export function GET() {
	redirect(308, 'https://www.imdb.com/name/nm4162617/');
}
