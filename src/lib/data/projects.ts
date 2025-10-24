export interface ProjectConfig {
	repo: string;
	description?: string; // Optional override for GitHub description
}

export interface Project {
	name: string;
	dateRange: string;
	description: string;
	url: string;
	languages: string[];
}

// Configuration: just list your repos and optionally override descriptions
export const projectConfigs: ProjectConfig[] = [
	{
		repo: 'jeffjose/twig',
		description: 'A modern, fast and customizable prompt.'
	},
	{
		repo: 'jeffjose/utter',
		description: 'Speech-to-text for Linux, using your mobile phone.'
	},
	{
		repo: 'jeffjose/plexman',
		description: 'A simple Plex library manager.'
	},
	{
		repo: 'jeffjose/audtag',
		description: 'Tag audiobooks on commandline.'
	},
	{
		repo: 'jeffjose/avatone',
		description: 'Generate unique avatars for your next project.'
	},
	{
		repo: 'jeffjose/seal',
		description: 'A simple, secure file encryption tool that makes it easy to protect your sensitive files.'
	}
];
