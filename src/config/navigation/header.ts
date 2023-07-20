import { NavItem } from './types'

export const headerNavigation: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    enabled: true,
  },
  {
    title: 'Who am I?',
    href: '/me',
    enabled: true,
  },
  {
    title: 'Under maintenance',
    href: '/maintenance',
    enabled: false,
  }
]