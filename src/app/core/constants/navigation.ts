import { NavItem } from '../models/nav.model';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    roles: ['user', 'admin'],
    children: [],
  },
  {
    label: 'Manage Tasks',
    icon: 'task',
    path: '/manage-tasks',
    roles: ['user', 'admin'],
    children: [],
  },
  {
    label: 'Create task',
    icon: 'add_box',
    path: '/create-task',
    roles: ['user', 'admin'],
    children: [],
  },
];

// Optional: Helper function to filter by role
export function getNavItems(userRole: string): NavItem[] {
  return NAV_ITEMS.filter(
    (item) => !item.roles || item.roles.includes(userRole)
  ).map((item) => ({
    ...item,
    children: item.children?.filter(
      (child) => !child.roles || child.roles.includes(userRole)
    ),
  }));
}
