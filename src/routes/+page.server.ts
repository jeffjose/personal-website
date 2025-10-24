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
		// Fetch repo info
		const repoResponse = await fetch(`https://api.github.com/repos/${repo}`, {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		});

		if (!repoResponse.ok) {
			console.error(`Failed to fetch repo ${repo}: ${repoResponse.status}`);
			return null;
		}

		const repoData: GitHubRepo = await repoResponse.json();

		// Fetch commits to get date range
		const commitsResponse = await fetch(`https://api.github.com/repos/${repo}/commits`, {
			headers: {
				Accept: 'application/vnd.github.v3+json'
			}
		});

		if (!commitsResponse.ok) {
			console.error(`Failed to fetch commits for ${repo}: ${commitsResponse.status}`);
			return null;
		}

		const commits: GitHubCommit[] = await commitsResponse.json();

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

		return {
			name: repoData.name,
			dateRange,
			description: descriptionOverride || repoData.description || 'No description available',
			url: repoData.html_url
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
