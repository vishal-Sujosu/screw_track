import AnalyticsIcon from './icons/AnalyticsIcon.svelte';
import ApplicationsIcon from './icons/ApplicationsIcon.svelte';
import HomeIcon from './icons/HomeIcon.svelte';
import { LayoutDashboard } from 'lucide-svelte';
import { Landmark } from 'lucide-svelte';
import { Users } from 'lucide-svelte';
import { ChartLine } from 'lucide-svelte';
import { Earth } from 'lucide-svelte';
import { Settings } from 'lucide-svelte';

export const data = [
	{
		title: 'Dashboard',
		icon: Users,
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

export const primeRoutes = [
	{
		title: 'Dashboard',
		icon: LayoutDashboard ,
		link: '/admin'
	},
	{
		title: 'All Comapnies',
		icon: Landmark,
		link: '/admin/companies'
	},
	{
		title: 'Users',
		icon: Users,
		link: '/admin/users'
	},
	{
		title: 'GIS',
		icon: Earth,
		link: '/admin/gis'
	},
	{
		title: 'Reports',
		icon: ChartLine,
		link: '/admin/reports'	
	},
	{
		title: 'Settings',
		icon: Settings,
		link: '/admin/settings'		
	}
];

export const contractorRoutes = [
];
export const subContractorRoutes = [
];
