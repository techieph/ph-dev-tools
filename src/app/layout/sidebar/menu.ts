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
    label: 'Excel Viewer',
    route: '/excel-viewer',
    icon: 'bi-file-earmark-spreadsheet-fill'
  },
  {
    label: 'Formatter',
    route: '/formatter',
    icon: 'bi-braces',
    children: [
      { label: 'HTML Formatter', route: '/formatter/html', icon: 'bi-filetype-html' },
      { label: 'CSS Formatter', route: '/formatter/css', icon: 'bi-filetype-css' },
      { label: 'JavaScript Formatter', route: '/formatter/js', icon: 'bi-filetype-js' },
      { label: 'SQL Formatter', route: '/formatter/sql', icon: 'bi-filetype-sql' },
      { label: 'XML Formatter', route: '/formatter/xml', icon: 'bi-filetype-xml' }
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
