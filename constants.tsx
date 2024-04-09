import { Activity, Home, Search } from 'lucide-react';

export const sidebarLinks = [
  {
    label: 'Home',
    href: '/home',
    active: true,
    icon: <Home size='28' strokeWidth='1.5' />,
    activeIcon: <Home size='28' strokeWidth='2' className='text-primary' />,
  },
  {
    label: 'Search',
    href: '/search',
    icon: <Search size='28' strokeWidth='1.5' />,
    activeIcon: <Search size='28' strokeWidth='2' className='text-primary' />,
  },
  {
    label: 'Activity',
    href: '/activity',
    icon: <Activity size='28' strokeWidth='1.5' />,
    activeIcon: <Activity size='28' strokeWidth='2' className='text-primary' />,
  },
];
