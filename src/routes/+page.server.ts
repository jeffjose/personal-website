import { projectConfigs, type Project } from '$lib/data/projects';

interface GitHubCommit {
	commit: {
		author: {
			date: string;
		};
	};
}

interface GitHubRepo {
	description: string;
	html_url: string;
	name: string;
}

async function fetchRepoData(repo: string, descriptionOverride?: string): Promise<Project | null> {
	try {
		// Fetch repo info, commits, and languages in parallel
		const [repoResponse, commitsResponse, languagesResponse] = await Promise.all([
			fetch(`https://api.github.com/repos/${repo}`, {
				headers: {
					Accept: 'application/vnd.github.v3+json'
				}
			}),
			fetch(`https://api.github.com/repos/${repo}/commits`, {
				headers: {
					Accept: 'application/vnd.github.v3+json'
				}
			}),
			fetch(`https://api.github.com/repos/${repo}/languages`, {
				headers: {
					Accept: 'application/vnd.github.v3+json'
				}
			})
		]);

		if (!repoResponse.ok) {
			console.error(`Failed to fetch repo ${repo}: ${repoResponse.status}`);
			return null;
		}

		if (!commitsResponse.ok) {
			console.error(`Failed to fetch commits for ${repo}: ${commitsResponse.status}`);
			return null;
		}

		if (!languagesResponse.ok) {
			console.error(`Failed to fetch languages for ${repo}: ${languagesResponse.status}`);
		}

		const repoData: GitHubRepo = await repoResponse.json();
		const commits: GitHubCommit[] = await commitsResponse.json();
		const languagesData: Record<string, number> = languagesResponse.ok
			? await languagesResponse.json()
			: {};

		if (commits.length === 0) {
			return null;
		}

		// First commit is the most recent, last commit is the oldest
		const mostRecentDate = new Date(commits[0].commit.author.date);
		const oldestDate = new Date(commits[commits.length - 1].commit.author.date);

		// Calculate date range
		const startYear = oldestDate.getFullYear();
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const mostRecentMonth = mostRecentDate.getMonth();
		const mostRecentYear = mostRecentDate.getFullYear();

		// Consider "present" if last commit was within the last 3 months
		const threeMonthsAgo = new Date();
		threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
		const isActive = mostRecentDate >= threeMonthsAgo;

		let dateRange: string;
		if (isActive) {
			dateRange = startYear === currentYear ? `${startYear}-present` : `${startYear}-present`;
		} else {
			dateRange =
				startYear === mostRecentYear ? `${startYear}` : `${startYear}-${mostRecentYear}`;
		}

		// Sort languages by bytes and get top languages
		const languages = Object.entries(languagesData)
			.sort(([, a], [, b]) => b - a)
			.slice(0, 3) // Get top 3 languages
			.map(([lang]) => lang);

		return {
			name: repoData.name,
			dateRange,
			description: descriptionOverride || repoData.description || 'No description available',
			url: repoData.html_url,
			languages
		};
	} catch (error) {
		console.error(`Error fetching data for ${repo}:`, error);
		return null;
	}
}

export async function load() {
	const projectPromises = projectConfigs.map((config) =>
		fetchRepoData(config.repo, config.description)
	);

	const projectResults = await Promise.all(projectPromises);

	// Filter out any failed fetches
	const projects = projectResults.filter((p): p is Project => p !== null);

	return {
		projects
	};
}
