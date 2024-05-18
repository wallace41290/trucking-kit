import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'destination-link',
    loadComponent: () =>
      import('./containers/destination-link/destination-link.component').then(
        (mod) => mod.DestinationLinkComponent
      ),
  },
  {
    path: 'navigation-rail',
    loadComponent: () =>
      import('./containers/navigation-rail/navigation-rail.component').then(
        (mod) => mod.NavigationRailComponent
      ),
  },
];
