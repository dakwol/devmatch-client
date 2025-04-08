// types/sidebar.ts
export interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export interface SidebarBlock {
  heading?: string;
  items: SidebarItem[];
}
