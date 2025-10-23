export interface Project {
	name: string;
	dateRange: string;
	description: string;
	url?: string;
}

export const projects: Project[] = [
	{
		name: 'FastAPI Performance Monitor',
		dateRange: '2020-present',
		description:
			'Real-time performance monitoring and analytics dashboard for FastAPI applications, helping developers identify bottlenecks and optimize API response times.',
		url: 'https://github.com/jeffjose/fastapi-monitor'
	},
	{
		name: 'React Visualization Toolkit',
		dateRange: '2021-present',
		description:
			'A comprehensive library of customizable, accessible chart components built on D3.js and React, designed for building data-rich dashboards and analytics interfaces.',
		url: 'https://github.com/jeffjose/react-viz-toolkit'
	},
	{
		name: 'DevOps Automation Suite',
		dateRange: '2019-2023',
		description:
			'Collection of Python scripts and GitHub Actions workflows that automate common DevOps tasks including deployment pipelines, environment provisioning, and infrastructure monitoring.',
		url: 'https://github.com/jeffjose/devops-automation'
	},
	{
		name: 'Open Source Dependency Scanner',
		dateRange: '2022-present',
		description:
			'CLI tool that analyzes project dependencies for security vulnerabilities, license compatibility issues, and outdated packages across multiple languages and package managers.',
		url: 'https://github.com/jeffjose/dependency-scanner'
	}
];
