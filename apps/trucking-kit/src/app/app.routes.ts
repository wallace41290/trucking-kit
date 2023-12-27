import { Route } from '@angular/router';
import { NotFoundPageComponent } from './containers';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: 'signIn',
    loadComponent: () =>
      import('@shared/auth/feature-auth').then((m) => m.SignInComponent),
  },
  {
    path: 'signUp',
    loadComponent: () =>
      import('@shared/auth/feature-auth').then((m) => m.SignUpComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('@shared/auth/feature-auth').then((m) => m.ProfileComponent),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];
