import { Route } from '@angular/router';
import { NotFoundPageComponent } from './components';
import { authGuard } from '@shared/auth/data-access';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@trucking-kit/home/feature-home').then((m) => m.HOME_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'profile-edit',
    loadChildren: () =>
      import('@trucking-kit/profile/feature-profile-edit').then(
        (m) => m.PROFILE_EDIT_ROUTES
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];
