export interface MenuItem {
  label: string;
  route?: string;
  icon? : string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    route: '/text-analysis',
    icon: 'bi-house-door-fill'
  },
  {
    label: 'Text',
    route: '/text-analysis',
    icon: 'bi-fonts',
    children: [
      { label: 'Text Analysis', route: '/text/text-analysis', icon: 'bi-file-text' },
      { label: 'Difference Checker', route: '/text/diff-checker', icon: 'bi-file-diff' }
    ]
  },
  {
    label: 'Orders',
    route: '/orders',
    icon: 'bi-bag-fill'
  },
  {
    label: 'Settings',
    route: '/settings',
    icon: 'bi-gear-fill'
  }
];
