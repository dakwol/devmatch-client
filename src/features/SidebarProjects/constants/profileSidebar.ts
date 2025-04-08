// constants/sidebar/profileSidebar.ts

import { SidebarBlock } from '../../../types/sidebar';

export const profileSidebar: SidebarBlock[] = [
  {
    heading: 'Профиль',
    items: [
      { title: 'О пользователе', href: '#' },
      { title: 'Навыки', href: '#' },
    ],
  },
  {
    heading: 'Проекты',
    items: [
      { title: 'Созданные', href: '#' },
      { title: 'Участвует', href: '#' },
    ],
  },
  {
    heading: 'Действия',
    items: [
      { title: 'Написать', href: '#' },
      { title: 'Пригласить в проект', href: '#' },
    ],
  },
];
