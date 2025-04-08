import { SidebarBlock } from '../../../types/sidebar';

export const dashboardSidebar: SidebarBlock[] = [
  {
    heading: 'Мой профиль',
    items: [
      { title: 'Редактировать профиль', href: '/dashboard/profile' },
      { title: 'Уведомления', href: '/dashboard/notifications' },
      { title: 'Выход', href: '/logout' },
    ],
  },
  {
    heading: 'Мои проекты',
    items: [
      { title: 'Активные', href: '/dashboard/projects?status=active' },
      { title: 'Черновики', href: '/dashboard/projects?status=draft' },
      { title: 'Завершённые', href: '/dashboard/projects?status=done' },
    ],
  },
];
