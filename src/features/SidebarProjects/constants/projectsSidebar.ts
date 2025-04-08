// constants/sidebar/projectsSidebar.ts

import { SidebarBlock } from '../../../types/sidebar';

export const projectsSidebar: SidebarBlock[] = [
  {
    heading: 'Навигация',
    items: [
      { title: 'Создать проект', href: '/new-project' },
      { title: 'Мои проекты', href: '/dashboard' },
    ],
  },
  {
    heading: 'Категории',
    items: [
      { title: 'Web', href: '/projects?category=web' },
      { title: 'AI', href: '/projects?category=ai' },
      { title: 'Game Dev', href: '/projects?category=game' },
    ],
  },
  {
    heading: 'Фильтры',
    items: [
      { title: 'Только активные', href: '/projects?status=active' },
      { title: 'Есть отклики', href: '/projects?responses=true' },
    ],
  },
];
