import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {

    name: 'Blog',
    url: '/blog/blog',
    iconComponent: {name: 'cil-notes'}
  },
  {
    name: 'Add claim',
    url: '/AddClaim',
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Claims',
    url: '/ClaimsList',
    iconComponent: { name: 'cil-cursor' }
  }
];
