import { Route } from '@angular/router';
import { NotFoundPageComponent } from './components';
import { authGuard } from '@shared/auth/data-access';

export const appRoutes: Route[] = [
  {
    path: 'feature-trucks',
    loadChildren: () =>
      import('@trucking-kit/company/feature-trucks').then(
        (m) => m.featureTrucksRoutes
      ),
  },
  {
    path: 'feature-driver',
    loadChildren: () =>
      import('@trucking-kit/company/feature-driver').then(
        (m) => m.featureDriverRoutes
      ),
  },
  {
    path: 'feature-drivers',
    loadChildren: () =>
      import('@trucking-kit/company/feature-drivers').then(
        (m) => m.featureDriversRoutes
      ),
  },
  {
    path: 'feature-company',
    loadChildren: () =>
      import('@trucking-kit/company/feature-company').then(
        (m) => m.featureCompanyRoutes
      ),
  },
  {
    path: 'feature-product',
    loadChildren: () =>
      import('@trucking-kit/dashboard/feature-product').then(
        (m) => m.featureProductRoutes
      ),
  },
  {
    path: 'feature-products',
    loadChildren: () =>
      import('@trucking-kit/dashboard/feature-products').then(
        (m) => m.featureProductsRoutes
      ),
  },
  {
    path: 'feature-dashboard',
    loadChildren: () =>
      import('@trucking-kit/dashboard/feature-dashboard').then(
        (m) => m.featureDashboardRoutes
      ),
  },
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
