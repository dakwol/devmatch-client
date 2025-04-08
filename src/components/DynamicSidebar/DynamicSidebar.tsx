'use client';

import { usePathname } from 'next/navigation';
import { dashboardSidebar } from '../../features/SidebarProjects/constants/dashboardSidebar';
import { profileSidebar } from '../../features/SidebarProjects/constants/profileSidebar';
import { projectsSidebar } from '../../features/SidebarProjects/constants/projectsSidebar';
import Sidebar from '../../features/SidebarProjects/SidebarProjects';
import { FC } from 'react';

const DynamicSidebar:FC = () => {
  const pathname = usePathname();

  const getSidebarConfig = () => {
    if (pathname.startsWith('/dashboard')) return dashboardSidebar;
    if (pathname.startsWith('/profile')) return profileSidebar;
    return projectsSidebar; 
  };

  return <Sidebar blocks={getSidebarConfig()} />;
};

export default DynamicSidebar;
