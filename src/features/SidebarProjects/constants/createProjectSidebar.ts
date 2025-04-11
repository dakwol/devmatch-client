import { SidebarBlock } from '../../../types/sidebar';

export const createProjectSidebar: SidebarBlock[] = [
  {
    heading: 'Мои проекты',
    items: [
      { title: 'Активные', href: '/new-project/projects?status=active' },
      { title: 'Черновики', href: '/new-project/projects?status=draft' },
      { title: 'Завершённые', href: '/new-project/projects?status=done' },
    ],
  },
];
