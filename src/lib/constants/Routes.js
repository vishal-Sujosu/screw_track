import { ChartLine, Earth, Landmark, LayoutDashboard, Settings, Users } from 'lucide-svelte';


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
];
export const subContractorRoutes = [
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
];
