import AnalyticsIcon from './icons/AnalyticsIcon.svelte';
import ApplicationsIcon from './icons/ApplicationsIcon.svelte';
import HomeIcon from './icons/HomeIcon.svelte';

export const data = [
	{
		title: 'Dashboard',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'Projects',
		icon: ApplicationsIcon,
		link: '/admin/applications'
	},
	{
		title: 'Clients',
		icon: AnalyticsIcon,
		link: '/admin/analytics'
	}
];
