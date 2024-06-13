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
    // Temporary initial route
    path: 'home',
    loadChildren: () =>
      import('@trucking-kit/home/feature-home').then((m) => m.HOME_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'company',
    loadChildren: () =>
      import('@trucking-kit/company/feature-company').then(
        (m) => m.featureCompanyRoutes
      ),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@trucking-kit/dashboard/feature-dashboard').then(
        (m) => m.featureDashboardRoutes
      ),
    canActivate: [authGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@trucking-kit/dashboard/feature-products').then(
        (m) => m.featureProductsRoutes
      ),
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
    path: 'tasks',
    loadChildren: () =>
      import('@trucking-kit/tasks/feature-tasks').then(
        (m) => m.featureTasksRoutes
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];
